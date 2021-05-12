import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';

const FridayView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your friday tasks.</h1>
          <Page items={context.friday} />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default FridayView;
