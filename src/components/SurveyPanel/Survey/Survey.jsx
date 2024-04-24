import React from 'react';
import PropTypes from 'prop-types';
import EditSurveyPanel from '../../../components/SurveyPanel/EditPanel/EditSurveyPanel';
import EditTab from './EditTab';
import EditQuestionPanel from './EditQuestionPanel';
import QuestionListPanel from './QuestionListPanel';
import Report from './Report';
import './Survey.css';

class Survey extends React.Component {
  render() {
    const { survey, onSurveyUpdate, onQuestionUpdate, onTabUpdate, onQuestionDelete, onQuestionAdd } = this.props;
    return (
      <div className="Survey">
        <div className="row">
          <div className="col-md-3">
            <QuestionListPanel
              questions={survey.questions}
              dispatch={onQuestionDelete}
            />
          </div>
          <div className="col-md-9">
            <EditSurveyPanel
              onUpdate={onSurveyUpdate}
              title={survey.title}
              subTitle={survey.subTitle}
            />
            <EditTab
              survey={survey}
              onTabUpdate={onTabUpdate}
            />
            <div className="EditQuestionPanel">
              {survey.questions.map((question, index) => (
                <EditQuestionPanel
                  key={question._id}
                  question={question}
                  updateQuestion={(updatedQuestion) => onQuestionUpdate(updatedQuestion, index)}
                />
              ))}
              <button className="btn btn-primary" onClick={onQuestionAdd}>Add Question</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Report results={survey.results} reportResult={survey.reportResult} />
          </div>
        </div>
      </div>
    );
  }
}

Survey.propTypes = {
  survey: PropTypes.object.isRequired,
  onSurveyUpdate: PropTypes.func.isRequired,
  onQuestionUpdate: PropTypes.func.isRequired,
  onTabUpdate: PropTypes.func.isRequired,
  onQuestionDelete: PropTypes.func.isRequired,
  onQuestionAdd: PropTypes.func.isRequired,
};

export default Survey;
