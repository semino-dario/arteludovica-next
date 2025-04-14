"use client"
import { useEffect, useState } from 'react';
import styles from '../../styles/page.module.scss'
import HiloAmarrillo from "@/app/assets/svg/HiloAmarrillo";

export default function OvilloAmarillo () {

    const [turn, setTurn] = useState(false)

    useEffect(()=> { setTurn(true)}, [])

    return(
    <div className={styles.imagenOvillo1}>
      <img className={`${styles.ovillo7} ${turn ? styles.girar : ""}`}  
      src="assets/images/imagenes-tejedoras/ovillos/ovillo7.png" 
      height="90px" width="90px" alt="ovillo de lana" />
        <HiloAmarrillo />
   </div>
    )
}