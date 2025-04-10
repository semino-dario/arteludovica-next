"use client";

import styles from "../styles/page.module.scss";
import MenuMDO from "../assets/svg/MenuMDO";
import Organigrama from "../assets/svg/Organigrama";
import NavBar from "../components/Navbar";
import { MDOProvider, useMDOContext } from "../context/ContextMDO";
import HistoriaMDO from "../components/musica-de-oficinas/HistoriaMDO";

export default function MusicaDeoficinasHome() {
  return (
    <MDOProvider>
      <Content />
    </MDOProvider>
  );
}

const Content = () => {
  const { section } = useMDOContext(); // Access the context here

  return (
    <div className={`${styles.containerMDO} ${section === "musica-de-oficinas"  ? styles.dinamicHeight : ""}`}>
      <NavBar />
      <MenuMDO />
      {section === "musica-de-oficinas" ? (
        <Organigrama />
      ) : (
        section === "historia" &&
        <HistoriaMDO />
        
      )}
    </div>
  );
};