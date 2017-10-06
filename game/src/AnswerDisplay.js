//QuestionDisplay.js
import React, { Component } from 'react';
import Question from './Question';
import style from './style';

class AnswerDisplay extends Component {
 
    render() {
 
        //This is mapping each question in the DB to a list of Question components and 
        //  and assigning the handle questionNodes to the list
        let thisAnswer = this.props.data.map(question => {
            return (
 
                    <Question
                        question={ question.question }
                        uniqueID={ question['_id'] }
                        onAnswerDisplay={ this.props.onAnswerDisplay }
                        key={ question['_id'] }
                        value= { question.answer }>
                        { question.category }
                        { question.value }
                        { question.answer }
                    </Question>
            )
        })       

        //This is returning the list of Question components within a div
        return (
            <div style={ style.questionDisplay }>
                { thisAnswer }
            </div>

        )
    }
}

export default AnswerDisplay;
