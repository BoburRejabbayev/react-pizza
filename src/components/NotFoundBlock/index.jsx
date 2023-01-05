import React from 'react'

import styles from './not-found.module.scss'

// console.log(styles);

export default function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1 >
                <span>😕</span>
                <br />
                NotFound
            </h1>
            <p className={styles.description} > ne naydeno tovarov </p>
        </div>
    )
}
