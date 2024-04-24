import React, { useState } from 'react';

const QuestionOptionList = ({ question, isActive, reportFilter, updateFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isActive ? 'active' : ''}>
      <a href="#" onClick={(e) => {
        e.preventDefault();
        toggle();
      }}>
        {question.title}
      </a>
      <ul className={isOpen ? '' : 'hidden'}>
        {question.options.map(option => {
          const isActive = reportFilter[question._id] && reportFilter[question._id][option._id];
          return (
            <li key={option._id}>
              <label>
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => {
                    updateFilter(reportFilter, { question: question._id, option: option._id, value: !isActive });
                  }}
                />{' '}
                {option.content}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionOptionList;
