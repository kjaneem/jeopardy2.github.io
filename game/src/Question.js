//Question.js
import React, { Component } from 'react';   //use React npm package
import style from './style';                //use style.js javascript
import marked from 'marked';                //use marked npm package

//KM - start
import QuestionDisplay from './QuestionDisplay';    //use QuestionDisplay.js javascript
import AnswerDisplay from './AnswerDisplay';        //use AnswerDisplay.js javascript
//KM - end


//Extend the generic React Component class
//Build a Question React Component
//Ensure that this component has access to the parent class' props
//  by including super(props)
//    (example:  one parent prop is the url of the website page)
//Include a bunch of useful methods that act on this component
class Question extends Component {
    constructor(props) {
        super(props);

        //Define the initial state of the Question props (properties)
        this.state= {
            toBeUpdated: false,
            toBeDisplayed: false,
            toBeAnswered: false,
            value: '',
            question: '',
            answer: ''
        };

        //binding all our functions to this class
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleQuestionUpdate = this.handleQuestionUpdate.bind(this);

        //KM - start
        this.displayQuestion = this.displayQuestion.bind(this);
        this.handleQuestionDisplay = this.handleQuestionDisplay.bind(this);
        this.displayAnswer = this.displayAnswer.bind(this);
        this.handleAnswerDisplay = this.handleAnswerDisplay.bind(this);
        //KM - end
    }

    //KM displayQuestion and handleQuestionDisplay - start
    displayQuestion(e){
        e.preventDefault();

        //brings up the question display textbox when we click on the Question link
        this.setState({ toBeDisplayed: !this.state.toBeDisplayed });
    }

    handleQuestionDisplay (e) {
        e.preventDefault();
    
        let id = this.props.uniqueID;

        this.props.onQuestionDisplay(id);

        this.setState({
            toBeDisplayed: !this.state.toBeDisplayed,
            question: '',
            answer: ''
        })
    }

    displayAnswer(e){
        e.preventDefault();

        //brings up the question display textbox when we click on the Question link
        this.setState({ toBeAnswered: !this.state.toBeAnswered });
    }

    handleAnswerDisplay (e) {
        e.preventDefault();
    
        let id = this.props.uniqueID;
        
        let answer1 = this.state.answer;

        this.props.onAnswerDisplay(id, answer1);

        this.setState({
            toBeAnswered: !this.state.toBeAnswered,
            question: '',
            answer: ''
        })
    }
    //KM displayQuestion and handleQuestionDisplay - end

    updateQuestion(e) {
        e.preventDefault();

        //brings up the update field when we click on the update link.
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }

    handleQuestionUpdate(e) {
        e.preventDefault();

        let id = this.props.uniqueID;

        //if question or answer changed, set it. if not, leave null and our PUT 
        //request will ignore it.
        let question = (this.state.question) ? this.state.question : null;
        let answer = (this.state.answer) ? this.state.answer : null;
        let question1 = { question: question, answer: answer};

        this.props.onQuestionUpdate(id, question1);

        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            question: '',
            answer: ''
        })
    }

    deleteQuestion(e) {
        e.preventDefault();

        let id = this.props.uniqueID;
     
        this.props.onQuestionDelete(id);
        console.log('oops deleted');
    }

    handleAnswerChange(e) {
        this.setState({ answer: e.target.value });
    }

    handleQuestionChange(e) {
        this.setState({ question: e.target.value });
    }

    // rawMarkup() {
    //     let rawMarkup = marked(this.props.children.toString());
    //     return { __html: rawMarkup };
    // }

    render() {
        return (
            <div style={ style.question1 }>
                
                {/*<h3>{this.props.question}</h3>*/}
                
                <h3 style={ style.valueStyle }>{ this.props.value }</h3>
        
                {/*<span dangerouslySetInnerHTML={ this.rawMarkup() } />*/}
            
                <div style={ style.linkDivStyle }>
                    <a style={ style.questionLink } href='#' onClick={ this.displayQuestion }>Question</a>
                    <a style={ style.answerLink } href='#' onClick={ this.displayAnswer }>Answer</a>
                </div>

                
                    { 
                        (this.state.toBeDisplayed)
                        ? 
                        (
                            //KM - when the Question link is clicked
                            <form onSubmit={ this.handleQuestionDisplay }>
                                <div>
                                    { this.props.question }
                                </div>
                            </form>
                        )
                        : null
                    }

                    {
                        (this.state.toBeAnswered)
                        ?
                        (
                            <form onSubmit= { this.handleAnswerDisplay }>
                                <div>
                                    { this.props.answer }
                                </div>
                            </form>
                        )
                        : null
                    }

            </div>

        )
    }
}

export default Question;