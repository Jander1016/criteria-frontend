import React from 'react';
import ReportItem from './ReportItem';

const Report = ({ reportResult, results }) => {
  return (
    <div className="Report">
      <h4>Total Data: {results.length}</h4>
      {reportResult.map((d, index) => (
        <ReportItem data={d} key={d._id} />
      ))}
    </div>
  );
};

export default Report;
