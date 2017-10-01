//QuestionList.js
import React, { Component } from 'react';
import Question from './Question';
import style from './style';

class QuestionList extends Component {
 
    render() {
        let questionNodes = this.props.data.map(question => {
            return (
 
                    <Question
                        question={ question.question }
                        uniqueID={ question['_id'] }
                        onQuestionDelete={ this.props.onQuestionDelete }
                        onQuestionUpdate={ this.props.onQuestionUpdate }
                        key={ question['_id'] }>
                        { question.answer }
                    </Question>
            )
        })
 
        return (
            <div style={ style.questionList }>
                { questionNodes }
            </div>
        )
    }
}

export default QuestionList;
