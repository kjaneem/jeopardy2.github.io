//Question.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Question extends Component {

    rawMarkup() {
        let rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div style={ style.question }>
            <h3>{this.props.question}</h3>
            <span dangerouslySetInnerHTML={ this.rawMarkup() } />
            </div>
        )
    }
}

export default Question;
