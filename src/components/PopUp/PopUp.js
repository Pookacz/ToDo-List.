import React from 'react';
import styles from './PopUp.module.scss';
import Button from '../Button/Button';
import Form from '../Form/Form'

const PopUp = ({ closePopUp }) => (
    <div className={styles.wrapper}>
        <div className={styles.button}>
            <Button className={styles.closeButton} onClick={closePopUp}>Close</Button>
        </div>
        <h1 className={styles.title}>Add New Content</h1>
        <Form />
    </div>
)

export default PopUp; 