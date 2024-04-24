import React, { useState } from 'react';
import { Button, Modal, Label, Glyphicon } from 'react-bootstrap';
import QuestionOptionList from './QuestionOptionList';
import { canReportTypes } from '../../reducers/data';
import './ReportFilter.css';

const ReportFilter = ({ survey, reportFilter, updateFilter, hasFilterMap }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleSubList = () => {
    // Implementación de toggleSubList si es necesario
  };

  const renderModal = () => {
    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Filter For Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="modal-report-filter">
            {survey.questions.filter(question => canReportTypes.indexOf(question.type) !== -1).map(question => (
              <li key={question._id}>
                <QuestionOptionList
                  question={question}
                  reportFilter={reportFilter}
                  isActive={hasFilterMap[question._id]}
                  updateFilter={updateFilter}
                />
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    );
  };

  const filterLabels = () => {
    let labels = [];
    Object.keys(reportFilter).filter(k => hasFilterMap[k]).forEach(questionId => {
      let question = survey.questions.find(q => q._id === questionId);
      question.options.forEach(option => {
        if (reportFilter[questionId][option._id]) {
          labels.push({
            question: question,
            option: option
          });
        }
      });
    });
    return labels;
  };

  return (
    <div className="ReportFilter">
      <Button bsStyle="primary" bsSize="xsmall" onClick={openModal}>
        <Glyphicon glyph="filter"/>
      </Button>
      <ul className="filter-labels list-inline">
        {filterLabels().map(({ question, option }) => (
          <li key={`${question._id}-${option._id}`}>
            <Label bsStyle="info">{question.title}: {option.content}
              <span className="remove-btn" onClick={() => {
                updateFilter(reportFilter, { question: question._id, option: option._id, value: false });
              }}>x</span>
            </Label>
          </li>
        ))}
      </ul>
      {renderModal()}
    </div>
  );
};

export default ReportFilter;
