//QuestionBox.js
import React, { Component } from 'react';           //use React npm
import axios from 'axios';                          //use axios npm
import QuestionList from './QuestionList';          //use QuestionList.js javascript

//KM - start
import QuestionDisplay from './QuestionDisplay';    //use QuestionDisplay.js javascript
import AnswerDisplay from './AnswerDisplay';        //use AnswerDisplay.js javascript
//KM - end

import QuestionForm from './QuestionForm';          //use QuestionForm.js javascript
import style from './style';                        //use style.js javascript

import Popup from 'react-popup';    //use react-popup npm package
//Extend the generic React Component class
//Build a QuestionBox React Component
//Ensure that this component has access to the parent class' props
//  by including super(props)
//    (example:  one parent prop is the url of the website page)
//Include a bunch of useful methods that act on this component
class QuestionBox extends Component {
    constructor(props) {

        //super allows you to access the constructor method of the parent class. 
        //The only reason to include props is to access this.props inside of your constructor
        //(so you can have access to the parent class' props)
        super(props);

        //Set the state of this component
        //  as an empty array called "data"
        this.state = { data: [], cats: [] };

        //bind();
        //used to preserve execution context for a function 
        //  that executes in another context. 
        //bind() creates a new function 
        //  that has the same body as the original function. 
        //The first argument passed to bind 
        //  specifies the value of the this keyword in the bound function
        //
        //Attach an event handler directly to elements
        //
        //bind() – lets’ me set whatever I want “this” to be
        this.loadQuestionsFromServer = this.loadQuestionsFromServer.bind(this);
        this.handleQuestionSubmit    = this.handleQuestionSubmit.bind(this);
        this.handleQuestionDelete    = this.handleQuestionDelete.bind(this);
        this.handleQuestionUpdate    = this.handleQuestionUpdate.bind(this);
        this.handleQuestionDisplay   = this.handleQuestionDisplay.bind(this);
        this.handleAnswerDisplay     = this.handleAnswerDisplay.bind(this);
    }

    //READ questions from DB
    loadQuestionsFromServer() {

        const newArray = Array();

        //GET - Read
        axios.get(this.props.url)
        .then(res => {

            let cats = [];
            cats.push( res.data.filter(p=> p.category=="Free or Easy"));
            cats.push( res.data.filter(p=> p.category=="Big Hack Attack"));
            cats.push( res.data.filter(p=> p.category=="Five Minutes or Less"));
            cats.push( res.data.filter(p=> p.category=="True or False"));
            this.setState({ data: res.data, cats: cats });

        });

    }

    //CREATE a question
    handleQuestionSubmit(question) {
        let questions = this.state.data;
        question.id = Date.now();
        let newQuestions = questions.concat([question]);
        this.setState({ data: newQuestions });
        
        //POST - Create
        axios.post(this.props.url, question)
        .catch(err => {
            console.error(err);
            this.setState({ data: questions });
        });
    }

    //DELETE a question
    handleQuestionDelete(id) {

        //DELETE - Delete
        axios.delete(`${this.props.url}/${id}`)
        .then(res => {
            console.log('Question deleted');
        })
        .catch(err => {
            console.error(err);
        });
    }

    //UPDATE a question
    handleQuestionUpdate(id, question) {

        //PUT - Update
        //sends the question id and new question/answer to our api
        axios.put(`${this.props.url}/${id}`, question)
        .catch(err => {
            console.log(err);
        })
    }

    //KM - start
    handleQuestionDisplay(id) {
        
        //GET - Read
        axios.get(`${this.props.url}/${id}`)
        .then(res => {
            this.setState({ data: res.data });
            console.log('/nATTEMPTING TO DISPLAY QUESTION/n');
        })
    }
    //KM - end

    //KM - start
    handleAnswerDisplay(id) {
            
        //GET - Read
        axios.get(`${this.props.url}/${id}`)
        .then(res => {
            this.setState({ data: res.data });
            console.log('/nATTEMPTING TO DISPLAY ANSWER/n');
        })
    }
    //KM - end

    //When the QuestionBox loads on the page
    //  load the questions from the DB via the server every so often...
    componentDidMount() {
        this.loadQuestionsFromServer();
        setInterval(this.loadQuestionsFromServer, this.props.pollInterval);
    }

    //Display QuestionBox
    render() {
        return (
            <div style={ style.questionBox }>
                <h2 style={ style.title }>Cyber Security Awareness Jeopardy</h2>

                <table>
                    <tr>
                        <td>
                            <h3 style={ style.tdh0 }>Free or Easy</h3>
                        </td>
                    </tr>
                    <tr>
                        <td style={ style.td0 } >

                <QuestionList style={ style.td0 } 
                    onQuestionDelete={ this.handleQuestionDelete }
                    onQuestionUpdate={ this.handleQuestionUpdate }
                    data={ this.state.cats[0] }
                />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 style={ style.tdh1 }>Big Hack Attack</h3>
                        </td>
                    </tr>
                    <tr>
                        <td style= { style.td1 }>

                <QuestionList style= { style.td1 }
                    onQuestionDelete={ this.handleQuestionDelete }
                    onQuestionUpdate={ this.handleQuestionUpdate }
                    data={ this.state.cats[1] }
                />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 style={ style.tdh2 }>Five Minutes or Less</h3>
                        </td>
                    </tr>
                    <tr>
                        <td style= { style.td2 }>

                <QuestionList style= { style.td2 }
                    onQuestionDelete={ this.handleQuestionDelete }
                    onQuestionUpdate={ this.handleQuestionUpdate }
                    data={ this.state.cats[2] }
                />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3 style={ style.tdh3 }>True or False</h3>
                        </td>
                    </tr>
                    <tr>
                        <td style= { style.td3 }>

                <QuestionList style= { style.td3 }
                    onQuestionDelete={ this.handleQuestionDelete }
                    onQuestionUpdate={ this.handleQuestionUpdate }
                    data={ this.state.cats[3] }
                />
                        </td>
                    </tr>


                </table>

                {/* KM - start */}
                {/*Display QuestionDisplay*/}
                {/* <QuestionDisplay
                    onQuestionDisplay={ this.handleQuestionDisplay }
                    data={ this.state.data }
                /> */}
                {/* KM - end */}

                {/* KM - start */}
                {/*Display QuestionDisplay*/}
                {/* <AnswerDisplay
                    onAnswerDisplay={ this.handleAnswerDisplay }
                    data={ this.state.data }
                /> */}
                {/* KM - end */}

                {/*Display QuestionForm*/}
                <QuestionForm onQuestionSubmit={ this.handleQuestionSubmit }
                />
                <Popup
                    className="mm-popup"
                    btnClass="mm-popup__btn"
                    closeBtn={true}
                    closeHtml={null}
                    defaultOk="Ok"
                    defaultCancel="Cancel"
                    wildClasses={false}
                    closeOnOutsideClick={true} 
                />
            </div>
        )
    }
}
export default QuestionBox;

