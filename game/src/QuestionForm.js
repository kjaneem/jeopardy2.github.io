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

        let question = this.state.question.trim();
        let answer = this.state.answer.trim();

        if (!answer || !question) {
            return;
        }
 
        this.props.onQuestionSubmit({ question: question, answer: answer });
        this.setState({ question: '', answer: '' });
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
