"use client";

import { useState } from "react";
import styles from "../styles/page.module.scss";

const images = [
  "http://localhost:3000/_next/static/media/IMG_5849.b3afc606.jpg",
  "http://www.arteludovica.com.ar/imagenes/imagenes-territorios/grabacion/grabacion-1.jpg",
  "http://www.arteludovica.com.ar/imagenes/imagenes-territorios/grabacion/grabacion-2.jpg",
  "http://www.arteludovica.com.ar/imagenes/imagenes-territorios/grabacion/grabacion-3.jpg",
  "http://www.arteludovica.com.ar/imagenes/imagenes-territorios/grabacion/grabacion-3.jpg",
  "http://www.arteludovica.com.ar/imagenes/imagenes-territorios/grabacion/grabacion-5.jpg",
];

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const openLightbox = (index: number) => {
      setCurrentIndex(index);
      setLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setLightboxOpen(false);
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div>
        <div className={styles.gallery}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
  
        {lightboxOpen && (
          <div className={styles.lightbox}>
            <span className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={goToPrev}>
              &#10094; {/* Left arrow */}
            </span>
            <img
              src={images[currentIndex]}
              alt={`Lightbox image ${currentIndex + 1}`}
              className={styles.lightboxImage}
            />
            <span className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={goToNext}>
              &#10095; {/* Right arrow */}
            </span>
            <span className={styles.lightboxClose} onClick={closeLightbox}>
              &times; {/* Close icon */}
            </span>
          </div>
        )}
      </div>
    );
  };
  

export default Gallery;