import {useState} from 'react'
import styles from "../styles/components/Header.module.css"

export default function Header() {
    return(
        <div>
                <title>
                    IP Address Tracker
                </title>
                <div className={styles.headerContainer}>
                    <header className={styles.header}>
                        <div className={styles.containerTitle}>
                            <h1>IP Address Tracker</h1>
                        </div>
                        <div className={styles.ipInput}>
                            <form>
                                <input type='number' placeholder='Search for any IP addres or domain' maxLength="15" minLength="15"/>
                                <input  type="submit" value={null} />
                            </form>
                        </div>
                    </header>
                </div>
        </div>
)}