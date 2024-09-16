import { useState,useEffect } from 'react';
// @ts-ignore
import styles from './header.module.css';
import {addDarkModeToStorage} from './../../functions/addDarkmode';

function header() {
    let [ShowModul,setShowModul]=useState(false);
    let [darkMode,setDarkMode]=useState(localStorage.getItem("darkMode") ?? 'dark')
    useEffect(()=>{
        document.body.classList.value="";
        document.body.classList.add(darkMode)
    },[darkMode])

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
            <button
                onClick={()=>{
                    addDarkModeToStorage(darkMode,setDarkMode);
                    

                }} className={styles.darkMode}>
                {darkMode==="dark" && <span className='icon-moon-o'/>}
                {darkMode==="light" && <span className='icon-sun'/>}
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
