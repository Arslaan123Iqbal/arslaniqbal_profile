import React from 'react'
import styles from './style.module.scss';

export default function Project({index, title, setModal}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
        </div>
    )
}