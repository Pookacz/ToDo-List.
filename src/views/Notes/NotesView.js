import React from 'react';
import AppContext from '../../context';
import styles from './NotesView.module.scss';
import Page from '../../components/Page/Page'

const NotesView = () => (
    <AppContext.Consumer>
    {(context) => (
        <>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>Your notes.</h1>
        <Page items={context.notes}/>
        </div>
        </>
    )}
    </AppContext.Consumer>
)

export default NotesView;