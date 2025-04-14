"use client"

import GalleryObras from '../components/GalleryObras';
import MenuObra from '../components/MenuObra';
import NavBar from '../components/Navbar';
import { MenuProvider, useContextMenu } from '../context/ContextMenu';
import styles from '../styles/page.module.scss'
import { imagesTejedoras, criticasTejedoras } from '../data/data';
import Criticas from '../components/Criticas';
import MainImageLasTejedoras from '../components/las-tejedoras/MainImageLasTejedoras';
import HistoriaTejedoras from '../components/las-tejedoras/HistoriaTejedoras';

export default function LasTehjedorassHome() {
  return (
    <MenuProvider>
      <Content />
    </MenuProvider>
  );
}


const Content = () => {

    const { section } = useContextMenu(); 

    return (
        <section className={`${styles.containerLasTejedoras} 
        ${section === "main-image"  ? styles.dinamicHeight : ""} 
        ${section !== "galeria" ? styles.dynamicAlign : ""}
        `}>
          <NavBar/>
        <div className={styles.headerLasTejedoras}>
        <h1 className={styles.mainTitleLasTejedoras}>Las tejedoras</h1>
          <MenuObra
            addStyle={styles.menuLasTejedoras}
          />  
        </div>
        { section === "main-image" ?
        <MainImageLasTejedoras/>
        :
        section === "historia" ?
        <HistoriaTejedoras />
        :
        section === "galeria" ?
        <GalleryObras
        videoUrl="https://www.youtube.com/embed/Bs-YbM5tbP0?si=GAZNX8JTg7W_bHy2"
        imageVideo="/assets/images/imagenes-tejedoras/tejedoras-programa-sin-texto.jpeg"
        images={imagesTejedoras}
        />  
        :
        section === "criticas" &&
        <Criticas
          criticas={criticasTejedoras}
        />  
      }
      


      </section>
    );
  }