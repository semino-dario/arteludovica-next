"use client"
import styles from "../../styles/page.module.scss"
import Gallery from "../Gallery"
import {imagesMDO} from "../../data/data"
import VideoPlayer from "../VideoPlayer"
import { useState } from "react";


export default function GalleryMDO() {
const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className={styles.containerGalleryObras}>
    <div className={styles.containerVideoPlayer}>
        
       <VideoPlayer
        imageVideo={"/assets/images/imagenes-mdo/mdo-funciones/mdo-funciones-1.jpeg"}
        videoUrl={"https://www.youtube.com/embed/O3X5y3q41cE?si=zn6U8gHnmRFKQq0n"}
        playVideo={playVideo}
        setPlayVideo={() => {setPlayVideo(true)}}
         />
            <p className={styles.textGallery}>Video realizado por Guillermo Balbuena</p>
    </div>
    <p className={styles.textGallery}>Fotografías de Agostina Centurión</p>
    <br /> <br />
    <Gallery
    images={imagesMDO}
    />
    </section>
  )  
}