"use client"
import styles from '../styles/page.module.scss';
import imageMDO from "../assets/images/home/volante-musica-de-oficinas.jpeg"
import { useState } from 'react';

const TurningCard = () => {

     const [isFlipped, setIsFlipped] = useState(false);
     
     const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
     }
    return(
        <div  onClick={handleClick} className={`${styles.card} ${isFlipped ? styles.turn : ''}`}>
            <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={imageMDO.src} alt="Image de la obra de teatro Música de oficinas" />
            </div>
            <div   className={styles.cardContent}>
                <p >Ver información de la obra</p>
            </div>
        </div>
    )

}

export default TurningCard;
