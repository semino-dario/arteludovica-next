"use client";

import { useState } from "react";
import styles from "../styles/page.module.scss";
import Link from "next/link";

  const NavBar = () => {
 const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive((prev) => !prev);
  };

  const closeNav = () => {
    setIsActive(false);
  };


  return (
    <nav 
    className={`${styles.navContainer} ${isActive ? styles.active : ""}`}>
      <div className={styles.barraElementos}>
        <Link className={styles.itemsBarra} href="/" onClick={closeNav}>
          INICIO
        </Link>
        <Link className={styles.itemsBarra} href="/#obras" onClick={closeNav}>
          OBRAS
        </Link>
        <Link className={styles.itemsBarra} href="/#musica-odamil" onClick={closeNav}>
          MÚSICA
        </Link>
        <Link className={styles.itemsBarra} href="/#textos-obras" onClick={closeNav}>
          TEXTOS
        </Link>
        <Link className={styles.itemsBarra} href="/#territorios-galeria" onClick={closeNav}>
          TERRITORIOS
        </Link>
        <Link className={styles.itemsBarra} href="/#equipo" onClick={closeNav}>
          EQUIPO
        </Link>
        <Link className={styles.itemsBarra} href="/#colofon" onClick={closeNav}>
          COLOFÓN
        </Link>
      </div>
      <label className={styles.label}  >
      <input className={styles.input}  
      type="checkbox" 
      id="check"
      checked={isActive}
      onChange={toggleNav}
      /> 
      <span className={styles.span} ></span>
      <span className={styles.span} ></span>
      <span className={styles.span} ></span>
    </label>
    </nav>
  );
};

export default NavBar;