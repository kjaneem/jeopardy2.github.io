import React from 'react';
import ReactDOM from 'react-dom';
import QuestionBox from './QuestionBox';

ReactDOM.render(
 <QuestionBox 
    url='http://localhost:3001/api/questions'
    pollInterval={2000}
 />,
 document.getElementById('root')
);

