import React from 'react';

const QuestionListPanel = ({ questions, dispatch }) => {
  return (
    <div className="QuestionListPanel">
      <h4>Questions</h4>
      <div className="QuestionList">
        {questions.map(question => (
          <a key={question.text} href="#" className="btn btn-default btn-sm" onClick={(e) => {
            e.preventDefault();
            dispatch(question.action());
          }}>{question.text}</a>
        ))}
      </div>
    </div>
  );
};

export default QuestionListPanel;
