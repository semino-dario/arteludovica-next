"use client";

import styles from "../styles/page.module.scss";
import MenuMDO from "../assets/svg/MenuMDO";
import Organigrama from "../assets/svg/Organigrama";
import NavBar from "../components/Navbar";
import { MenuProvider, useContextMenu } from "../context/ContextMenu";
import HistoriaMDO from "../components/musica-de-oficinas/HistoriaMDO";
import ElencoMDO from "../components/musica-de-oficinas/ElencoMDO";
import Criticas from "../components/Criticas";
import { criticasMDO } from "../data/data";
import GalleryObras from "../components/GalleryObras";
import { imagesMDO } from "../data/data";

export default function MusicaDeoficinasHome() {
  return (
    <MenuProvider>
      <Content />
    </MenuProvider>
  );
}

const Content = () => {
  const { section } = useContextMenu(); 

  return (
    <div className={`${styles.containerMDO} ${section === "main-image"  ? styles.dinamicHeight : ""}`}>
      <NavBar />
      <div className={styles.containerMenuMDO}>
      <MenuMDO />
      </div>
      {section === "main-image" ? (
        <Organigrama />
      ) : (
        section === "historia" ?
        <HistoriaMDO />
        :
        section === "elenco" ?
        <ElencoMDO /> 
        :
        section === "criticas" ?
        <Criticas
          criticas={criticasMDO}
        />
        
        :
        section === "galeria" &&
       <GalleryObras 
       imageVideo="/assets/images/imagenes-mdo/mdo-funciones/mdo-funciones-1.jpeg"
       videoUrl="/assets/images/imagenes-mdo/mdo-funciones/mdo-funciones-1.jpeg"
       images={imagesMDO}
       />
        
      )}
    </div>
  );
};