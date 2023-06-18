import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './Spinner.module.scss';


function FullScreenSpinner() {
    return (
        <div className={styles.fullScreenSpinner}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>

    );
}

export default FullScreenSpinner;