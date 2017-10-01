//QuestionBox.js
import React, { Component } from 'react';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';
//import DATA from '../data';
import DATA from './data';
import style from './style';

class QuestionBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <div style={ style.commentBox }>
            <h2>Let's Play Jeopardy!</h2>
            <QuestionList data={ DATA }/>
            <QuestionForm />
            </div>
        )
    }
}

export default QuestionBox;

