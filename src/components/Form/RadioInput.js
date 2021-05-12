import React from 'react';
import styles from './RadioInput.module.scss';

const RadioInput = ({ id, checked, onChange, children }) => (
  <label className={styles.radioInput}>
    <input id={id} type="radio" checked={checked} onChange={onChange} />
    <div>{children}</div>
  </label>
);

export default RadioInput;