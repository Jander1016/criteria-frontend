import React from "react";
import { Field } from 'formik';

class MultiLineText extends React.Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <Field component="textarea" className="form-control" placeholder={placeholder} name={_id}></Field>
          </div>
        </div>
    );
  }
}

export default MultiLineText;
