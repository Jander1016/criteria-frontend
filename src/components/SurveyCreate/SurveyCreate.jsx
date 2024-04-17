import React from "react";
import "./SurveyCreate.css";

const SurveyCreate = () => {
  return (
   
      <div class="survey-wrapper">
      <article className="survey-header">
      <div className="survey-header-content">
        <input type="text" className="editable-title" placeholder="Survey Title" />
        <textarea className="editable-textarea" placeholder="Description"></textarea>
      </div>
      <img className="crit360-icon" src="./logo.png" alt="crit360" />
      </article>
    </div>
  );
}

export default SurveyCreate;
