"use client"

import styles from '../app/styles/Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.lds_ripple}>
            <div></div><div></div>
        </div>
    );
};

export default Loading;