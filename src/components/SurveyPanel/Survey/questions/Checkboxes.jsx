import React from 'react';
import { Field } from 'formik';

class Checkboxes extends React.Component {
  render() {
    const { title, options, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div>
          {options.map((option, index) => {
            return (
                <div className="checkbox" key={index}>
                  <label>
                    <Field type="checkbox" name={`${_id}[${option._id}]`} component="input"/>
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

export default Checkboxes;
