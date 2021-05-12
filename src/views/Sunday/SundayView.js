import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';

const SundayView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your sunday tasks.</h1>
          <Page items={context.sunday} />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default SundayView;
