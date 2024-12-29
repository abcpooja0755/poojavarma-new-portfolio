
import styles from "./Experience.module.css"

import Html from "../../../assets/Experience-Img/html.png"
import Css from "../../../assets/Experience-Img/css.png"
import react from "../../../assets/Experience-Img/react.png"
import nodejs from "../../../assets/Experience-Img/node-js.png"
import bootstrap from "../../../assets/Experience-Img/bootstrap.png"
import js from "../../../assets/Experience-Img/javascript.png"

import netfix from "../../../assets/Experience-Img/netfix.png"
import google from "../../../assets/Experience-Img/google.png"
import micro from "../../../assets/Experience-Img/micro.png"


export const Experience = () => {
    return (
        <section className={styles.container} id="experience">

            <h2 className={styles.title}>Experience</h2>

            <div className={styles.content}>
                <div className={styles.Experience_items}>

                    <div className={styles.Experience_item}>
                        <div className={styles.Experience_img}> <img src={Html} alt="" /> </div>
                        <p >HTML</p>
                    </div>
                    <div className={styles.Experience_item}>
                        <div className={styles.Experience_img}>  <img src={Css} alt="" /> </div>
                        <p>CSS</p>
                    </div>
                    <div className={styles.Experience_item}>
                        <div className={styles.Experience_img}>  <img src={js} alt="" /> </div>
                        <p>JAVA_SCRIPT</p>
                    </div>
                    <div className={styles.Experience_item}>
                        <div className={styles.Experience_img}> <img src={react} alt="" /> </div>
                        <p>REACKT</p>
                    </div>
                    <div className={styles.Experience_item}>
                        <div className={styles.Experience_img}> <img  src={bootstrap} alt="" /> </div>
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className={styles.Experience_item}>
                        <div className={styles.Experience_img}> <img  src={nodejs} alt="" /> </div>
                        <p>NODE_JS</p>
                    </div>
                </div>


                <div className={styles.second_container}>
                    <div className={styles.second_container_item}>
                        <img src={google} alt="" />
                      <div>
                         <h3>Google</h3>
                         <span>Date : 01/01/2020 to 01/01/2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sequi!</p>
                      </div>
                    </div>
                    <div className={styles.second_container_item}>
                        <img src={micro} alt="" />
                        <div>
                         <h3>Microsoft</h3>
                         <span>Date : 01/01/2020 to 01/01/2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sequi!</p>
                      </div>
                    </div>
                    <div className={styles.second_container_item}>
                        <img src={netfix} alt="" />
                        <div>
                         <h3>Netflix</h3>
                         <span>Date : 01/01/2020 to 01/01/2024</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sequi!</p>
                      </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
