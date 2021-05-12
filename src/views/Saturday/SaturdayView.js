import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';

const SaturdayView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your saturday tasks.</h1>
          <Page items={context.saturday} />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default SaturdayView;
