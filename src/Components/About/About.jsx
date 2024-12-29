import React from 'react'
import styles from './About.module.css'

import about from "../../../assets/about.png"
import cursor from "../../../assets/cursor.png"
import server from "../../../assets/server.png"
import section from "../../../assets/section.png"


export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.about_img} src={about} alt="" />
           
            <ul className={styles.about_items}>
                <li className={styles.about_item}><img src={cursor} alt="" />
                    <div className={styles.about_item_text}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                    </div>
                </li>
                <li className={styles.about_item} ><img src={server} alt="" />
                    <div className={styles.about_item_text}>
                        <h3>Backend Developer</h3>
                        <p>I have experience devleoping fast and optimised back-end systems and API's</p>
                    </div>
                </li>
                <li className={styles.about_item} ><img src={section} alt="" />
                    <div className={styles.about_item_text}>
                        <h3>UI Designer</h3>
                        <p>I have designer multiple landing pages and have crated design systems as well</p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}
