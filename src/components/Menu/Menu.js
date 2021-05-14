import React from 'react';
import styles from './Menu.module.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';
import NavItems from './NavItems';
import AppContext from '../../context';

const Menu = ({ openPopUp }) => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.nav}>
        <Header />
        <nav>
          <ul>
            {context.linkInfo.map((item, index) => (
              <NavItems key={index} {...item} />
            ))}
          </ul>
        </nav>
        <Button onClick={openPopUp}>Add</Button>
      </div>
    )}
  </AppContext.Consumer>
);

export default Menu;
