"use client";

import { useState } from "react";
import styles from "../styles/page.module.scss";

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
        <a className={styles.itemsBarra} href="#titulo-principal" onClick={closeNav}>
          INICIO
        </a>
        <a className={styles.itemsBarra} href="#obras" onClick={closeNav}>
          OBRAS
        </a>
        <a className={styles.itemsBarra} href="#musica-odamil" onClick={closeNav}>
          MÚSICA
        </a>
        <a className={styles.itemsBarra} href="#textos-obras" onClick={closeNav}>
          TEXTOS
        </a>
        <a className={styles.itemsBarra} href="#territorios-galeria" onClick={closeNav}>
          TERRITORIOS
        </a>
        <a className={styles.itemsBarra} href="#equipo" onClick={closeNav}>
          EQUIPO
        </a>
        <a className={styles.itemsBarra} href="#colofon" onClick={closeNav}>
          COLOFÓN
        </a>
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