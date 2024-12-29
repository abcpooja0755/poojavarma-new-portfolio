import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
  const [menuOpne,setMenuOpne]= useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="">Portfolio</a>
      <div className={styles.nav_menu}>
        <img onClick={()=>setMenuOpne(!menuOpne)} className={styles.menu_btn} src={ menuOpne? getImageUrl("nav/close1.png"): getImageUrl("nav/hmb.png")} alt="loading..." />
        <ul onClick={()=> setMenuOpne(false)} className={`${styles.menu_item} ${menuOpne && styles.menuOpne}`}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Project</a></li>
          <li><a href="">Contact</a></li>

        </ul>
      </div>
    </nav>
  )
}
