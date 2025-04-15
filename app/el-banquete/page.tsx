"use client"

import GalleryObras from '../components/GalleryObras';
import MenuObra from '../components/MenuObra';
import NavBar from '../components/Navbar';
import { MenuProvider, useContextMenu } from '../context/ContextMenu';
import styles from '../styles/page.module.scss'
import { imagesBanquete, comentariosBanquete } from '../data/data';
import Criticas from '../components/Criticas';
import HistoriaBanquete from '../components/el-banquete/HistoriaBanquete';
import ElencoBanquete from '../components/el-banquete/ElencoBanquete';
import GaleriaGiratoria from '../components/el-banquete/GaleriaGiratoria';

export default function BanqueteHome() {
  return (
    <MenuProvider>
      <Content />
    </MenuProvider>
  );
}


const Content = () => {

    const { section } = useContextMenu(); 

    return (
        <section className={`${styles.containerBanquete} 
        ${section === "main-image"  ? styles.dinamicHeight : ""} 
        ${section !== "galeria" ? styles.dynamicAlign : ""}
        `}>
          <NavBar/>
        <div className={styles.headerBanquete}>
        <h1 >El Banquete de Platón</h1>
          <MenuObra
            addStyle={styles.menuBanquete}
          />  
        </div>
        { section === "main-image" ?
          <GaleriaGiratoria/> 
        :
        section === "historia" ?
        <HistoriaBanquete/>
        :
        section === "elenco" ?
        <ElencoBanquete/>
        :
        section === "galeria" ?
        <GalleryObras
        images={imagesBanquete}
        />  
        :
        section === "criticas" &&
        <Criticas
          criticas={comentariosBanquete}
        />  
      }
      


      </section>
    );
  }