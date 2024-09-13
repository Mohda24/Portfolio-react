import React from 'react'
// @ts-ignore
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerLinks}>
                <li><a className={styles.link} href="">About</a></li>
                <li><a className={styles.link} href="">Project</a></li>
                <li><a className={styles.link} href="">Speaking</a></li>
                <li><a className={styles.link} href="">User</a></li>
            </ul>
            <p className={styles.copyright}>@2024 Ouzed All rights reserved.</p>

        </footer>
    )
}

export default Footer
