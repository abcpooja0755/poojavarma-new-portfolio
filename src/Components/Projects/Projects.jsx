import React from 'react'
import styles from "./Projects.module.css"
import code from '../../../assets/code.png'

export const Projects = () => {
    return (
        <section className={styles.container}>

         <h2 className={styles.title}>Projects</h2>
            
         <div className={styles.content}>

                <div className={styles.items}>
                    <img src={code} alt="" />
                    <h3 className={styles.item_title}>Electric Vehicles</h3>
                    <p className={styles.item_para}>In this project design the landing page of the Electric Vehicles</p>
                    <div className={styles.item}>
                        <span>React</span>
                        <span>Express</span>
                        <span>Node-Js</span>
                    </div>
                    <div className={styles.link}>
                        <span>Demo</span>
                        <span>Source</span>
                    </div>
                </div>


                <div className={styles.items}>
                    <img src={code} alt="" />
                    <h3 className={styles.item_title}>Tic-Tac-Toe Game</h3>
                    <p className={styles.item_para}>In this project, I make the Tic-Tac-Toe Game with the hellp of react</p>
                    <div className={styles.item}>
                        <span>React</span>
                        <span>Express</span>
                        <span>Node-Js</span>
                    </div>
                    <div className={styles.link}>
                        <span>Demo</span>
                        <span>Source</span>
                    </div>
                </div>


                <div className={styles.items}>
                    <img src={code} alt="" />
                    <h3 className={styles.item_title}>News App</h3>
                    <p className={styles.item_para}>In this project i make the news app using API and react</p>
                    <div className={styles.item}>
                        <span>React</span>
                        <span>Express</span>
                        <span>Node-Js</span>
                    </div>
                    <div className={styles.link}>
                        <span>Demo</span>
                        <span>Source</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
