import { motion } from 'framer-motion'
// @ts-ignore
import styles from './Card.module.css'

function Card({ title, description,key,src}) {
    return (
        <motion.article
            key={key}
            layout
            initial={{ transform: 'scale(0.4)' }}
            animate={{ transform: 'scale(1)' }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 8, stiffness: 50, duration: "0.4s" }}
            className={styles.card}>
            <div className={styles.cardImgBox}>
                <img loading='lazy' className={styles.cardImg} src={src} alt="" />
            </div>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.cardLinks}>
                    <div className={styles.cardRepoLinks}>
                        <div className={`${styles.linkIcon} icon-link`}></div>
                        <div className={`${styles.linkGithub} icon-github`}></div>
                    </div>
                    <a className={`${styles.linkMore}`} href=''>
                        more
                        <span className={`${styles.Arrow} icon-arrow-right`}></span>
                    </a>
                </div>

            </div>

        </motion.article>
    )
}

export default Card