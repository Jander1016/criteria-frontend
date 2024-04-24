import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class GraphReport extends React.Component {
  render() {
    const { width, height, data } = this.props;

    return (
      <div>
        <BarChart data={data} width={width} height={height}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#337ab7" barSize={20} />
        </BarChart>
      </div>
    );
  }
}

GraphReport.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default GraphReport;
