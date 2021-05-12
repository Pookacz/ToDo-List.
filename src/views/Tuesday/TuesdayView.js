import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';

const TuesdayView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your tuesday tasks.</h1>
          <Page items={context.tuesday} />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default TuesdayView;
