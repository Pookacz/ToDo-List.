import React from 'react';
import styles from './GeneralView.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page';
import { Route } from 'react-router-dom';

const GeneralView = ({ navTitle, navLink, navType }) => (
  <Route exact path={navLink}>
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            {navTitle === 'Notes' ? `Your ${navTitle}.` : `Your ${navTitle} tasks.`}
          </h1>
          <Page items={context[navType]} />
        </div>
      )}
    </AppContext.Consumer>
  </Route>
);

export default GeneralView;
