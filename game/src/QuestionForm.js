//QuestionForm.js
import React, { Component } from 'react';
import style from './style';

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = { category: '', value: '', question: '', answer: '' };
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryChange(e) {
        this.setState({ category: e.target.value });
    }

    handleValueChange(e) {
        this.setState({ value: e.target.value });
    }

    handleQuestionChange(e) {
        this.setState({ question: e.target.value });
    }

    handleAnswerChange(e) {
        this.setState({ answer: e.target.value });
    }

    handleSubmit(e) {
         e.preventDefault();

        let category = this.state.category.trim();
        let value = this.state.value.trim();
        let question = this.state.question.trim();
        let answer = this.state.answer.trim();

        if (!category || !value || !answer || !question ) {
            return;
        }
 
        this.props.onQuestionSubmit({ category: category, value: value, question: question, answer: answer });
        this.setState({ category: '', value: '', question: '', answer: '' });
    }

    render() {
        return (

            <form style={ style.questionForm } onSubmit={ this.handleSubmit }>

                <p
                    style={ style.questionFormTitle }
                    >
                    Add a new game question below:
                </p>

                <input
                    type='text'
                    placeholder='Enter category…'
                    style={ style.questionFormCategory}
                    value={ this.state.category }
                    onChange={ this.handleCategoryChange } 
                />

                <input
                    type='text'
                    placeholder='Enter value…'
                    style={ style.questionFormValue}
                    value={ this.state.value }
                    onChange={ this.handleValueChange } 
                />

                <input
                    type='text'
                    placeholder='Enter question…'
                    style={ style.questionFormQuestion}
                    value={ this.state.question }
                    onChange={ this.handleQuestionChange } 
                />

                <input
                    type='text'
                    placeholder='Enter answer…'
                    style={ style.questionFormAnswer}
                    value={ this.state.answer }
                    onChange={ this.handleAnswerChange } 
                />

                <input
                    type='submit'
                    style={ style.questionFormPost }
                    value='Save'
                />
            </form>
        )
    }
}
export default QuestionForm;
