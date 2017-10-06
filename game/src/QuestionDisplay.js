//QuestionDisplay.js
import React, { Component } from 'react';
import Question from './Question';
import style from './style';

class QuestionDisplay extends Component {
 
    render() {
        //This is mapping each question in the DB to a list of Question components and 
        //  and assigning the handle questionNodes to the list
        // let questionNodes = this.props.data.map(question => {
        //     return (
 
        //             <Question
        //                 question={ question.question }
        //                 uniqueID={ question['_id'] }
        //                 onQuestionDelete={ this.props.onQuestionDelete }
        //                 onQuestionUpdate={ this.props.onQuestionUpdate }
        //                 key={ question['_id'] }
        //                 value= { question.value }>
        //                 { question.category }
        //                 { question.value }
        //                 { question.answer }
        //             </Question>
        //     )
        // })
 
        //This is mapping each question in the DB to a list of Question components and 
        //  and assigning the handle questionNodes to the list
        let thisQuestion = this.props.data.map(question => {
            return (
 
                    <Question
                        question={ question.question }
                        uniqueID={ question['_id'] }
                        onQuestionDisplay={ this.props.onQuestionDisplay }
                        key={ question['_id'] }
                        value= { question.question }>
                        { question.category }
                        { question.value }
                        { question.answer }
                    </Question>
            )
        })       

        //This is returning the list of Question components within a div
        return (
            <div style={ style.questionDisplay }>
                { thisQuestion }
            </div>

        )
    }
}

export default QuestionDisplay;
