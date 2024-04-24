import React from "react";
import { Field } from 'formik';

class SingleLineText extends React.Component {
  render() {
    const { title, placeholder, _id } = this.props;
    return (
        <div>
          <h3 className="question-title">{title}</h3>
          <div className="form-group">
            <Field type="text" className="form-control" placeholder={placeholder} name={_id} component='input' />
          </div>
        </div>
    );
  }
}

export default SingleLineText;
