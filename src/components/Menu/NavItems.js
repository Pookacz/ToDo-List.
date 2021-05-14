import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavItems.module.scss';

const NavItems = ({ navTitle, navLink }) => (
  <li className={styles.navItem}>
    <NavLink
      exact
      activeClassName={styles.navItemLinkActive}
      className={styles.navItemLink}
      to={navLink}
    >
      {navTitle}
    </NavLink>
  </li>
);

NavItems.propTypes = {
  navTitle: PropTypes.string.isRequired,
  navLink: PropTypes.string.isRequired,
};

export default NavItems;
