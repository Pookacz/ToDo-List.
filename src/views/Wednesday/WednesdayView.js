import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';

const WednesdayView = () => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Your wednesday tasks.</h1>
          <Page items={context.wednesday} />
        </div>
      </>
    )}
  </AppContext.Consumer>
);

export default WednesdayView;
