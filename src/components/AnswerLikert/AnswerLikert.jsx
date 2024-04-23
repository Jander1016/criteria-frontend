import React from "react";
import "./AnswerLikert.css";

const AnswerLikert = () => {
  return (
    <section className="rating-scale">
      <ul className='likert'>
        <li>
          <input type="radio" id="likert-1" name="likert" value="-2" />
          <label htmlFor="likert-1">1</label>
        </li>
        <li>
          <input type="radio" id="likert-2" name="likert" value="-1" />
          <label htmlFor="likert-2">2</label>
        </li>
        <li>
          <input type="radio" id="likert-3" name="likert" value="0" />
          <label htmlFor="likert-3">3</label>
        </li>
        <li>
          <input type="radio" id="likert-4" name="likert" value="1" />
          <label htmlFor="likert-4">4</label>
        </li>
        <li>
          <input type="radio" id="likert-5" name="likert" value="2" />
          <label htmlFor="likert-5">5</label>
        </li>
      </ul>
      <div className="buttons">
        <button className="submit">Submit</button>
      </div>
    </section>
  );
}

export default AnswerLikert;
