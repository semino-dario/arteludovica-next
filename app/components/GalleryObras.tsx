"use client"
import styles from "../styles/page.module.scss"
import Gallery from "./Gallery"
import VideoPlayer from "./VideoPlayer"
import { useState } from "react";

interface GalleryObrasProps{
  imageVideo:string,
  videoUrl:string
  images:string[]
}

const  GalleryObras:React.FC<GalleryObrasProps> = ({imageVideo, videoUrl, images}) => {
const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className={styles.containerGalleryObras}>
    <div className={styles.containerVideoPlayer}>
        
       <VideoPlayer
        imageVideo={imageVideo}
        videoUrl={videoUrl}
        playVideo={playVideo}
        setPlayVideo={() => {setPlayVideo(true)}}
         />
            <p className={styles.textGallery}>Video realizado por Guillermo Balbuena</p>
    </div>
    <p className={styles.textGallery}>Fotografías de Agostina Centurión</p>
    <br /> <br />
    <Gallery
    images={images}
    />
    </section>
  )  
}

export default GalleryObras