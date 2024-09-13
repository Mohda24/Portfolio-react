import React from 'react'
// @ts-ignore
import styles from './Contact.module.css';

function Contact() {
    return (
        <section className={styles.contact}>

            <h2 className={styles.contactTitle}>
                <span className={`${styles.contactIcon} icon-envelope`}></span>
                Contact Us
            </h2>
            <p className={styles.contactDescription}>Contact Us for more information and get notified When I publish Something new. </p>

            <div className={styles.contactBody}>
                <form className={styles.contactForm}>
                    <div className={styles.contactEmail}>
                        <label className={styles.label} htmlFor="">Email Address:</label>
                        <input required className={`${styles.inputEmail}`} type="email" name="" id="" />
                    </div>
                    <div className={styles.contactMsg}>
                        <label className={styles.label} htmlFor="">Your Message:</label>
                        <textarea required className={`${styles.textarea}`} name="" id=""></textarea>
                    </div>
                    <button className={styles.submit}>Submit</button>
                </form>
            
                <div className={styles.contactAnimation}></div>
            </div>
        </section>
    )
}

export default Contact
