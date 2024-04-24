import React from 'react';
import PropTypes from 'prop-types';
import './TableReport.css';

const TableReport = ({ data }) => {
  return (
    <div className="TableReport">
      <table className="table table-condensed">
        <thead>
          <tr>
            <th className="option">Options</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td className="option">{row.name}</td>
                <td>{row.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TableReport.propTypes = {
  data: PropTypes.array.isRequired
};

export default TableReport;
