//QuestionForm.js
import React, { Component } from 'react';
import style from './style';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = { question: '', answer: '' };
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleQuestionChange(e) {
        this.setState({ question: e.target.value });
    }

    handleAnswerChange(e) {
        this.setState({ answer: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.question} said “${this.state.answer}”`)
        //we will be tying this into the POST method in a bit
    }

    render() {
        return (
            <form style={ style.questionForm } onSubmit={ this.handleSubmit }>

                <input
                    type='answer'
                    placeholder='Enter question…'
                    style={ style.questionFormQuestion}
                    value={ this.state.question }
                    onChange={ this.handleQuestionChange } 
                />

                <input
                    type='answer'
                    placeholder='Enter answer…'
                    style={ style.questionFormAnswer}
                    value={ this.state.answer }
                    onChange={ this.handleAnswerChange } 
                />

                <input
                    type='submit'
                    style={ style.questionFormPost }
                    value='Post' 
                />

            </form>
    )
 }
}

export default QuestionForm;
