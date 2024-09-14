import React from 'react'
// @ts-ignore
import styles from './Hero.module.css';



function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroProfile}>
                    <img src="./HeroLogo.webp" alt='Picture for hero section' className={styles.HeroLogo} />
                    <span className={`${styles.iconVerified} icon-verified`}/>

                </div>
                <h1 className={styles.heroMainTitle}>Software designer, founder, and amateur astronaut.</h1>
                <p className={styles.heroParagraph}>I’m Mohda, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms</p>
                <div className={styles.heroLinks}>
                    <a className={`${styles.heroLinksIcon} icon-facebook`} href=""/>
                    <a className={`${styles.heroLinksIcon} icon-instagram `} href=""/>
                    <a className={`${styles.heroLinksIcon} icon-github `} href=""/>
                    <a className={`${styles.heroLinksIcon} icon-whatsapp `} href=""/>
                </div>
            </div>
            <div className={styles.HeroSectionAnimation}>

            </div>

        </section>
    )
}

export default Hero
