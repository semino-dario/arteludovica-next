"use client"
import styles from '../styles/page.module.scss';
import { useState } from 'react';
import CardButton from '../assets/svg/CardButton';
import Link from 'next/link';

interface TurningCardProps {
    image:string;
    title: string;
    subtitle: string;
    link:string
}

const TurningCard:React.FC<TurningCardProps> = ({image, title, subtitle, link}) => {

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
               <Link href={link}> <CardButton/></Link>
            </div>
        </div>
    )

}

export default TurningCard;
