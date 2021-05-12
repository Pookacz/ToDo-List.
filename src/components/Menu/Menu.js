import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';

const Menu = ({ openPopUp }) => (
  <>
    <div className={styles.nav}>
      <Header />
      <nav>
        <ul className={styles.wrapper}>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/"
            >
              Notes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/monday"
            >
              Monday
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/tuesday"
            >
              Tuesday
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/wednesday"
            >
              Wednesday
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/thursday"
            >
              Thursday
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/friday"
            >
              Friday
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/saturday"
            >
              Saturday
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              activeClassName={styles.navItemLinkActive}
              className={styles.navItemLink}
              to="/sunday"
            >
              Sunday
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button onClick={openPopUp}>Add</Button>
    </div>
  </>
);

export default Menu;
