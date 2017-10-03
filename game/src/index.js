//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import QuestionBox from './QuestionBox';

//At the indicated url
//  render component QuestionBox
//  every two seconds
//  within element called root
//  that is defined in the index.html body
ReactDOM.render(
 <QuestionBox 
    url='http://localhost:3001/api/questions'
    pollInterval={2000}
 />,
 document.getElementById('root')
);



