import React from 'react';
import EditPanel from './EditPanel/EditSurveyPanel';
import Report from './Report/Report';
import Result from './Result/ResultGrid';
import Survey from './Survey/Survey';
import SurveyList from './SurveyList/SurveyList';
import SurveyPreview from './SurveyPreview/SurveyPreview';


const SurveyPanel = () => {
  return (
    <div>
      <h1>Survey Panel</h1>
      {/* Render each sub-component */}
      <EditPanel />
      <Report />
      <Result />
      <Survey />
      <SurveyList />
      <SurveyPreview />
    </div>
  );
}

export default SurveyPanel;
