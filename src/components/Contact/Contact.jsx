import React from 'react'
// @ts-ignore
import styles from './Contact.module.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from './../../../public/animation/Animation - 1726433702893.json';
import EmailAnimation from './../../../public/animation/emailAnimation.json';

function Contact() {
    const [state, handleSubmit] = useForm("xpwaeoko");

    return (
        <section className={styles.contact}>

            <h2 className={styles.contactTitle}>
                <span className={`${styles.contactIcon} icon-envelope`}></span>
                Contact Us
            </h2>
            <p className={styles.contactDescription}>Contact Us for more information and get notified When I publish Something new. </p>

            <div className={styles.contactBody}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.contactEmail}>
                        <label className={styles.label} htmlFor="">Email Address:</label>
                        <input autoComplete='off' required className={`${styles.inputEmail}`} type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                    </div>
                    <div className={styles.contactMsg}>
                        <label className={styles.label} htmlFor="">Your Message:</label>
                        <textarea required className={`${styles.textarea}`} name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className={styles.submit}>{state.submitting ? "Sumbitting..." : "Submit"}</button>
                    {state.succeeded && <p style={{ color: 'var(--title)', fontSize: '1.125rem', marginTop: '1.7rem', display: 'flex', gap: '2px', alignItems: 'center' }}>
                        <Lottie
                            style={{ height: 35 }}
                            loop={false}
                            animationData={doneAnimation}
                            aria-aria-labelledby="use lottie animation"
                        />
                        Your Message Has Been Sent Successfully ✔👌</p>}
                </form>
                <div className={styles.contactAnimation}>
                    <Lottie
                        style={{ height: 350 }}
                        loop={true}
                        animationData={EmailAnimation}
                        aria-aria-labelledby="use lottie animation"
                    />

                </div>
            </div>
        </section>
    )
}

export default Contact
