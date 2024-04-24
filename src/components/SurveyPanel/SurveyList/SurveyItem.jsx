import React from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../../routers/routes';
import './SurveyItem.css';

class SurveyItem extends React.Component {
  render() {
    const { survey, survey: { title } } = this.props;
    return (
      <div className="SurveyItem">
        <Link to={Path.survey(survey)}>{title}</Link>
      </div>
    );
  }
}

SurveyItem.propTypes = {};
SurveyItem.defaultProps = {};

export default SurveyItem;
