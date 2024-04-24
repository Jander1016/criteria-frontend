import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './EditTab.css';

const EditTab = ({ activeTab, onUpdateTab, tabs }) => {
  return (
    <div className="EditTab">
      <ul className="nav nav-pills">
        {tabs.map(tab => (
          <TabLink
            key={tab.type}
            active={activeTab === tab.type}
            onClick={() => onUpdateTab(tab.type)}>
            {tab.text}
          </TabLink>
        ))}
      </ul>
      {tabs.map(tab => (
        <TabPanel active={activeTab === tab.type} key={tab.type}>
          {tab.panel}
        </TabPanel>
      ))}
    </div>
  );
};

EditTab.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onUpdateTab: PropTypes.func.isRequired,
};

export default EditTab;

// Subcomponentes

const TabLink = ({ active, children, onClick }) => {
  const tabClass = classNames('tab-item', { active });
  return (
    <li role="presentation" className={tabClass}>
      <a
        className="btn btn-sm btn-default"
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}>
        {children}
      </a>
    </li>
  );
};

TabLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TabPanel = ({ active, children }) => {
  return active ? <div>{children}</div> : null;
};

TabPanel.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
