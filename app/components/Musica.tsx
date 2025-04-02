"use client";

import { useState } from 'react';
import styles from '../styles/page.module.scss';
import MusicButton from '../assets/svg/MusicButton';
import imageDisc from '../assets/images/home/disco-musica2.png';
import imageVideo from '../assets/images/home/fer-fantasma.jpg';
import PlayIcon from '../assets/svg/PlayIcon';
import CloseIcon from '../assets/svg/CloseIcon';

export default function Musica() {
    
    const [renderVideo, setRenderVideo] = useState(false);
    const [turnDisc, setTurnDisc] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);

    const closeVideo = () => {
        setRenderVideo(false);
        setTurnDisc(false);
        setPlayVideo(false);
    } 
   
    const openVideo = () => {
      setTurnDisc(true);
      setTimeout(() => {
        setRenderVideo(true);
      }
      , 1000);
    }
    return (

        <section className={styles.musicaSection}>
          <div className={styles.textMusicContainer}>
                <h1 className={styles.titleSection}>Música</h1>
                <p className={styles.textHome}>Julián Gil Ostapiewicz, Adriel Corias Iacovino y Martín Braccone, los integrantes de Odamil Yotsé, compusieron la música de nuestra primera obra. Es buenísima.</p>
              </div>
            { !renderVideo ?
            <div className={styles.musicaContainer}>  
            <div>  
                  <img 
                    onClick={openVideo}
                    className={`${styles.imageDisc} ${turnDisc ? styles.turnDisc : ''}`}
                    src={imageDisc.src}
                    alt="imagen del disco con la música de la obra" />
                  <MusicButton
                    onClick={openVideo}
                  />
                  </div>
            </div>
            :
            <div className={styles.videoContainer}> 
              {!playVideo ?
              <div className={styles.videoMaskContainer}>
                <img src={imageVideo.src} alt="imagen de Música de Oficinas" />
                <PlayIcon
                onClick={() => setPlayVideo(true)}
                />
              </div>
              :
              <iframe 
                className={styles.video}
                src="https://www.youtube.com/embed/qpXJE-NGDY0?si=a6QtB2xC5DqrMO9s" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>

              } 
              <CloseIcon
                onClick={closeVideo}
              />
            </div>}
        </section>
    )


}