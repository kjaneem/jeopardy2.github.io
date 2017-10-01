//server.js
'use strict'

//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//import mongoDB schema
var Question = require('./model/questions');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

//CONNECT TO mongoDB via mlab.com hosting
//db config
mongoose.connect('mongodb://kjaneem:Silver63!@ds157444.mlab.com:57444/jeopardy2');

//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //and remove cacheing so we get the most recent questions
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//
//Create a new route and give it GET and POST HTTP methods 
//to retrieve data from, and post data to, our database we connected
//
   //adding the /questions route to our /api router
   router.route('/questions')

    //retrieve all questions from the database
    .get(function(req, res) {

    //looks at our Question Schema
    Question.find(function(err, questions) {

    if (err)
    res.send(err);

    //responds with a json object of our database questions.
    res.json(questions)
    });
    })

    //post new question to the database
    .post(function(req, res) {
    var question = new Question();

    //body parser lets us use the req.body
    question.category = req.body.category;
    question.value = req.body.value;
    question.question = req.body.question;
    question.answer = req.body.answer;
   
   question.save(function(err) {
    if (err)
    res.send(err);
    res.json({ message: 'Question successfully added!' });
    });
    });
//

//
 //Adding a route to a specific question based on the database ID
 router.route('/questions/:question_id')
 
  //The put method gives us the chance to update our question based on 
  //the ID passed to the route
   .put(function(req, res) {
         Question.findById(req.params.question_id, function(err, question) {
 
             if (err)
             res.send(err);
 
             //setting the new question and answer to whatever was changed. If 
             //nothing was changed we will not alter the field.
             (req.body.question) ? question.question = req.body.question : null;
             (req.body.answer) ? question.answer = req.body.answer : null;
   
             //save question
             question.save(function(err) {
 
                 if (err)
                     res.send(err);
 
             res.json({ message: 'Question has been updated' });
             });
         });
     })
  
   //delete method for removing a question from our database
   .delete(function(req, res) {
 
         //selects the question by its ID, then removes it.
         Question.remove({ _id: req.params.question_id }, function(err, question) {
 
             if (err)
                 res.send(err);
   
         res.json({ message: 'Question has been deleted' })
         })
     });
 //


//

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
