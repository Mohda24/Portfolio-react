import { useState } from 'react';
// @ts-ignore
import styles from './header.module.css';

function header() {
    let [ShowModul,setShowModul]=useState(false);
    return (
        <header className={styles.header}>
            <button className={`${styles.menu} icon-menu`} onClick={()=>{
                setShowModul(true);
            }}/>
            <div/>
            <nav className={styles.navigation}>
                <ul className={styles.links}>
                    <li><a className={styles.link} href="">About</a></li>
                    <li><a className={styles.link} href="">Articles</a></li>
                    <li><a className={styles.link} href="">Projects</a></li>
                    <li><a className={styles.link} href="">Speaking</a></li>
                    <li><a className={styles.link} href="">Uses</a></li>
                </ul>

            </nav>
            <button className={styles.darkMode}>
                <span className='icon-moon-o'/>
            </button>
            {ShowModul &&
            <div  className={styles.fixed}>
                <ul className={styles.modul}>
                    <li className={styles.modulChild}>
                        <button className={`${styles.iconCancel} icon-cancel`} onClick={()=>{
                            setShowModul(false)
                        }}/>
                    </li>
                    <li className={styles.modulChild}><a className={styles.link}  href="">About</a></li>
                    <li className={styles.modulChild}><a className={styles.link}  href="">Articles</a></li>
                    <li className={styles.modulChild}><a className={styles.link}  href="">Projects</a></li>
                    <li className={styles.modulChild}><a className={styles.link}  href="">Speaking</a></li>
                    <li className={styles.modulChild}><a className={styles.link}  href="">Uses</a></li>
                </ul>
            </div>}
            
        </header>
    )
}

export default header
