//QuestionList.js
import React, { Component } from 'react';
import Question from './Question';
import style from './style';

import Popup from 'react-popup';    //use react-popup npm package

class QuestionList extends Component {

    // displayPopup() {
    //     Popup.create({
    //         title: null,
    //         content: question,
    //         className: 'alert',
    //         buttons: {
    //             right: ['ok']
    //         }
    //     });
    // }
 
    render() {
        //This is mapping each question in the DB to a list of Question components and 
        //  and assigning the handle questionNodes to the list
        let questionNodes = this.props.data.map(question => {
            return (
 
                    <Question
                        question={ question.question }
                        uniqueID={ question['_id'] }
                        displayPopup={this.displayPopup}
                        onQuestionDelete={ this.props.onQuestionDelete }
                        onQuestionUpdate={ this.props.onQuestionUpdate }
                        key={ question['_id'] }
                        value= { question.value }
                        answer= {question.answer}
                        category= {question.category} >
                        { question.category }
                        { question.value }
                        { question.answer }
                    </Question>
            )
        })
 
        //This is returning the list of Question components within a div
        return (
            
            <div style={ style.questionList }>
                { questionNodes }
                
            </div>

        )
    }
}

export default QuestionList;
