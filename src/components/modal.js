import {useState} from 'react'
import styles from '../styles/components/Modal.module.css'

export default function Modal() {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalPosition}>
                <ul className={styles.mainInfo}>
                    <ul>
                        IP ADDRESS
                        <li>
                            {}
                        </li>
                    </ul>
                    <ul>
                        LOCATION 
                        <li>
                            {}
                        </li>
                    </ul>
                    <ul>
                        TIMEZONE
                        <li>
                            {}
                        </li>
                    </ul>
                    <ul>
                        ISP
                        <li>
                            {}
                        </li>
                    </ul>
                </ul>

            </div>
        </div>

    )


}