"use client"
import styles from '../styles/page.module.scss';
import { useState } from 'react';
import CardButton from '../assets/svg/CardButton';

interface TurningCardProps {
    image:string;
    title: string;
    subtitle: string;}

const TurningCard:React.FC<TurningCardProps> = ({image, title, subtitle}) => {

     const [isFlipped, setIsFlipped] = useState(false);
     
     const handleClick = () => {
        setIsFlipped((prevState) => !prevState);
     }
    return(
        <div  onClick={handleClick} className={`${styles.card} ${isFlipped ? styles.turn : ''}`}>
            <div className={styles.cardImageContainer}>
                <img className={styles.cardImage} src={image} alt="Image de la obra de teatro Música de oficinas" />
            </div>
            <div   className={styles.cardContent}>
                <div className={styles.cardText}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <CardButton/>
            </div>
        </div>
    )

}

export default TurningCard;
