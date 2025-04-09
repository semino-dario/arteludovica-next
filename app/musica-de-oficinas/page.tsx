"use client";

import styles from "../styles/page.module.scss";
import MenuMDO from "../assets/svg/MenuMDO";
import Organigrama from "../assets/svg/Organigrama";
import NavBar from "../components/Navbar";
import { MDOProvider, useMDOContext } from "../context/ContextMDO";

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
    <div className={styles.containerMDO}>
      <NavBar />
      <MenuMDO />
      {section === "musica-de-oficinas" ? (
        <Organigrama />
      ) : (
        <h1 style={{ color: "white" }}>{section}</h1>
      )}
    </div>
  );
};