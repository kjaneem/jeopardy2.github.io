//QuestionList.js
import React, { Component } from 'react';
import Question from './Question';
import style from './style';

class QuestionList extends Component {
 
    render() {
        //This is mapping each question in the DB to the list
        let questionNodes = this.props.data.map(question => {
            return (
 
                    <Question
                        question={ question.question }
                        uniqueID={ question['_id'] }
                        onQuestionDelete={ this.props.onQuestionDelete }
                        onQuestionUpdate={ this.props.onQuestionUpdate }
                        key={ question['_id'] }
                        value= { question.value }>
                        { question.category }
                        { question.value }
                        { question.answer }
                    </Question>
            )
        })
 
        //This is returning the list
        return (
            <div style={ style.questionList }>
                { questionNodes }
            </div>
        )
    }
}

export default QuestionList;
