import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';

const ThursdayView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your thursday tasks.</h1>
          <Page items={context.thursday} />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default ThursdayView;
