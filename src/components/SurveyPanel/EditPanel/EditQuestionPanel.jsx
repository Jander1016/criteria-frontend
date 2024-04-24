import React, { Component } from 'react';
import PropTypes from "prop-types";
import { QuestionTypes } from '../../constants/Questions';
import MultipleChoiceEditor from './question_editors/MultipleChoiceEditor';
import TextEditor from './question_editors/TextEditor';

import './EditQuestionPanel.css';

const questionEditorMap = {
  [QuestionTypes.CHECKBOXES]: (question, updateQuestion) => (
    <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
  ),
  [QuestionTypes.DROPDOWN]: (question, updateQuestion) => (
    <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
  ),
  [QuestionTypes.MULTI_CHOICE]: (question, updateQuestion) => (
    <MultipleChoiceEditor {...question} updateQuestion={updateQuestion} />
  ),
  [QuestionTypes.SINGLE_LINE_TEXT]: (question, updateQuestion) => (
    <TextEditor {...question} updateQuestion={updateQuestion} />
  ),
  [QuestionTypes.MUTLI_LINE_TEXT]: (question, updateQuestion) => (
    <TextEditor {...question} updateQuestion={updateQuestion} />
  )
};

class EditQuestionPanel extends Component {
  render() {
    const { question, updateQuestion } = this.props;
    let mapped = null;
    if (questionEditorMap[question.type]) {
      mapped = questionEditorMap[question.type](question, updateQuestion);
    }
    return (
      <div className="EditQuestionPanel">
        {mapped}
      </div>
    );
  }
}

EditQuestionPanel.propTypes = {
  question: PropTypes.object.isRequired,
  updateQuestion: PropTypes.func.isRequired
};

export default EditQuestionPanel;
