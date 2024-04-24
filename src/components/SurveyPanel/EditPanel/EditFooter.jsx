import React from 'react';
import PropTypes from 'prop-types';
import PanelButton from './PanelButton';
import './EditFooter.css';

class EditFooter extends React.Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }

  save() {
    this.props.onSave(this.props.survey);
  }

  delete() {
    this.props.onDelete(this.props.survey);
  }

  render() {
    return (
      <div className="EditFooter">
        <PanelButton onClick={this.save}>
          {this.props.isUpdateSuccess && <span className="glyphicon glyphicon-ok"></span>}
          {' '}
          Save Survey
        </PanelButton>
      </div>
    );
  }
}

EditFooter.propTypes = {
  survey: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isUpdateSuccess: PropTypes.bool.isRequired,
};

export default EditFooter;
