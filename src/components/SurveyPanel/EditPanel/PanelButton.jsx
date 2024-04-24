import React from 'react';

const PanelButton = ({ className, children, ...rest }) => {
  return (
    <a type="button" className={`btn btn-sm btn-primary ${className || ''}`} {...rest}>
      {children}
    </a>
  );
};

export default PanelButton;
