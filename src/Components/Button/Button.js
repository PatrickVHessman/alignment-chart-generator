import React from 'react';
import styles from './Button.module.css'

const button = (props) => (
    <button
    className={styles.Button}
    onClick={props.clicked}
    >{props.buttonText}</button>
);

export default button;