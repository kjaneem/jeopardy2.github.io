//Question.js
import React, { Component } from 'react';   //use React npm package
import style from './style';                //use style.js javascript
import marked from 'marked';                //use marked npm package

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
    }

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
                <a style={ style.questionLink } href='#' onClick={ this.updateQuestion }>Question</a>
                <a style={ style.answerLink } href='#' onClick={ this.deleteQuestion }>Answer</a>
                </div>
                    { 
                        (this.state.toBeUpdated)
                        ? 
                        (
                            <form onSubmit={ this.handleQuestionUpdate }>
 
                                <input
                                    type='answer'
                                    placeholder='Update question…'
                                    style={ style.questionFormQuestion }
                                    value={ this.state.question }
                                    onChange= { this.handleQuestionChange } 
                                />

                                <input
                                    type='answer'
                                    placeholder='Update answer…'
                                    style= { style.questionFormAnswer }
                                    value={ this.state.answer }
                                    onChange={ this.handleAnswerChange } 
                                />

                                <input
                                    type='submit'
                                    style={ style.questionFormPost }
                                    value='Update' 
                                />
                            </form>
                        )
                        : null
                    }
            </div>
        )
    }
}

export default Question;