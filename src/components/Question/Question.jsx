import React from 'react';

const Question = () => {
  return (

<div className="survey-question">
        <div className="question-text"> 
          <input type="text" className="editable-questiontext" placeholder="question" />
          <span className="required-indicator" title="Required"><i className="fa-solid fa-asterisk"></i></span>
        </div>
      </div>
  
);
}

export default Question;