import React from 'react';
import { Field } from 'formik';

class MultiChoice extends React.Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div key={index} className="radio">
                  <label>
                    <Field component="input" type="radio" name={_id} value={option._id} />
                    {option.content}
                  </label>
                </div>
            );
          })}
          </div>
        </div>
    );
  }
}

export default MultiChoice;
