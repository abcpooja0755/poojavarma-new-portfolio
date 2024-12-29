import React from 'react'
import { getImageUrl } from '../../utils'
import hero from "../../../assets/hero.png"
import styles from './Hero.module.css'

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} >Hi,I'm Pooja Verma</h1>
            <p className={styles.para}>I'm a full-stack developer with 2 years experience using React and Node.js. Reach out if you'd like to learn more!</p>
            <a className={styles.contaict} href="0ankushmeshram@gmail.com">Contact Me</a>

        </div>
        <img src={hero} alt="loading..." className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.botuumBlur}></div>
        
    </section>
}
