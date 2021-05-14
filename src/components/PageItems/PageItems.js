import React from 'react';
import PropTypes from 'prop-types';

const PageItems = ({ title, description }) => (
  <div>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </div>
);

PageItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageItems;
