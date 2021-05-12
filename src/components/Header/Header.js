import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/ToDoList_logotype.svg';

const Header = () => (
  <header className={styles.wrapper}>
    <img className={styles.logotype} src={logoImage} alt="To Do List Logotype" />
  </header>
);

export default Header;
