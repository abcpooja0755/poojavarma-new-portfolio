import React from 'react'
import styles from './Contact.module.css'
import email from '../../../assets/contact-img/email.png'
import linkdin from '../../../assets/contact-img/linkdin.png'
import git from '../../../assets/contact-img/git.png'

export const Contact = () => {
    return (

        <footer className={styles.container}>
            <div className={styles.title}>
                <h2>Contact</h2>
                <p>Feel free to reach out !</p>
            </div>

            <div className={styles.items}>
                <span className={styles.item}>
                    <img src={email} alt="" />
                    <a href="0ankushmeshram123@gmail.com">poojaverma462023@gmail.com</a>
                </span>

                <span className={styles.item}>
                    <img src={linkdin} alt="" />
                    <a href="0ankushmeshram123@gmail.com">linkedin.con/in/pooja-verma-20b062330</a>
                </span>

                <span className={styles.item}>
                    <img src={git} alt="" />
                    <a href="0ankushmeshram123@gmail.com">github.com/abcpooja0755</a>
                </span>
            </div>

        </footer>
    )
}
