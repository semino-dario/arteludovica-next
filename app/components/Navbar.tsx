"use client";

import { useState } from "react";
import styles from "../styles/page.module.scss";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <nav className={`${styles.navContainer} ${isActive ? styles.active : ""}`}>
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
      <div className="contenedor-icono" onClick={toggleNav}>
<div className={`${styles.hamburger} ${styles.navBoton} ${styles.hamburgerCel} ${isActive ? styles.isActive : ""}`} id="hamburger-9">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
    </div></div>


    </nav>
  );
};

export default NavBar;