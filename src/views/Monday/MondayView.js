import React from 'react';
import styles from '../View.module.scss';
import AppContext from '../../context';
import Page from '../../components/Page/Page' 

const MondayView = () => (
    <AppContext.Consumer>
    {(context) => (
        <>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>Your monday tasks.</h1>
        <Page items={context.monday}/>
        </div>
        </>
    )}
    </AppContext.Consumer>
)

export default MondayView;
