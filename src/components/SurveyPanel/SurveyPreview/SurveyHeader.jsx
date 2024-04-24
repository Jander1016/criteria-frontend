import React from 'react';
import PropTypes from 'prop-types';

class SurveyHeader extends React.Component {
  render() {
    const { title, subTitle, isActive, onActive } = this.props;
    return (
      <header className={isActive ? 'active' : ''} onClick={onActive}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </header>
    );
  }
}

SurveyHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  isActive: PropTypes.bool,
  onActive: PropTypes.func,
};

SurveyHeader.defaultProps = {
  isActive: false,
  onActive: () => {},
};

export default SurveyHeader;
