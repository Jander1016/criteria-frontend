import React, { useState, useEffect } from 'react';
import GraphReport from './GraphReport';
import TableReport from './TableReport';

const ReportItem = ({ data }) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const $container = document.querySelector('.GraphContainer');
      if ($container) {
        setDimensions({
          height: $container.offsetHeight - 10,
          width: $container.offsetWidth - 20
        });
      }
    };

    setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div>{data.title}</div>
      </div>
      <div className="row Question" key={data.title}>
        <div className="col-md-7 GraphContainer">
          <GraphReport data={data.stats} width={dimensions.width} height={dimensions.height} />
        </div>
        <div className="col-md-5 TableContainer">
          <TableReport data={data.stats} />
        </div>
      </div>
    </div>
  );
};

export default ReportItem;
