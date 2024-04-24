import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EditSurveyPanel.css';

class EditSurveyPanel extends Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.subTitleRef = React.createRef();
  }

  update = () => {
    const { onUpdate } = this.props;
    onUpdate({
      title: this.titleRef.current.value,
      subTitle: this.subTitleRef.current.value
    });
  };

  render() {
    const { title, subTitle } = this.props;
    return (
      <div className="EditSurveyPanel">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            ref={this.titleRef}
            onChange={this.update}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subTitle">SubTitle</label>
          <textarea
            id="subTitle"
            className="form-control"
            value={subTitle}
            ref={this.subTitleRef}
            onChange={this.update}
          />
        </div>
      </div>
    );
  }
}

EditSurveyPanel.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default EditSurveyPanel;
