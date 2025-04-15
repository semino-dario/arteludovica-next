"use client";

import { useState, useEffect } from "react";
import styles from "../styles/page.module.scss";
import OpenGallery from "../assets/svg/OpenGallery";
import Link from "next/link";

interface TerritoriosProps {
  images: string[];
}

const Territorios: React.FC<TerritoriosProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (

    <section 
      id={"territorios-galeria"}
      className={styles.containerSection}>
        <h1 className={styles.titleSection}>Territorios</h1>
        <p className={styles.textHome} >Lugares, personas y momentos que formaron nuestro viaje.</p>
        <div className={styles.carousel}>
        {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Carousel image ${index + 1}`}
            className={`${styles.carouselImage} ${
                index === currentIndex ? styles.active : ""
            }`}
            />
        ))}
        <div className={styles.carouselControls}>
            {images.map((_, index) => (
            <div
                key={index}
                className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
            ></div>
            ))}
        </div>
        </div>
       <Link href={"/galeria"}> <OpenGallery/></Link>
    </section>
  );
};

export default Territorios;