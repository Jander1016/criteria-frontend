import React from 'react';
import './AreaEvaluation.css';
import '../../styles/Themes';
import '../../styles/Variables';

const AreaEvaluation = () => {
  return (
    <section className="survey-page">
      <h3>Area1</h3>
      <input type="text" className="editable-areatitle" placeholder="Area Evaluation or Group of questions" />
      <p className="area-description">Description</p>
      <img className="crit360-icon" src="./logo.png" alt="crit360"></img>
    </section>
  );
}

/*stylesAreaEvaluation*/



export default AreaEvaluation;