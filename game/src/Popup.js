//Popup.js
import React, { Component } from 'react';   //use React npm package
import Popup from 'react-popup';    //use react-popup npm package

class PopupDisplay extends Component {
    constructor(props) {
        super(props);

        this.state= {
            question: '',
            answer: ''
        };
    }

    render() {
        return (

            <Popup
                className="mm-popup"
                btnClass="mm-popup__btn"
                closeBtn={true}
                closeHtml={null}
                defaultOk="Ok"
                defaultCancel="Cancel"
                wildClasses={false}
                closeOnOutsideClick={true} 
            />

        )
    }
}
export default PopupDisplay;