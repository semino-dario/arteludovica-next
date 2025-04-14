"use client"
import HiloVerde from '@/app/assets/svg/HiloVerde'
import styles from '../../styles/page.module.scss'
import { useEffect, useState } from 'react'

export default function OvilloVerde () {


      const [turn, setTurn] = useState(false)
  
      useEffect(()=> { setTurn(true)}, [])

    return (
        <div>
        <img 
          className={`${styles.ovillo8} ${ turn ? styles.girar2 : ""}`} 
          src="/assets/images/imagenes-tejedoras/ovillos/ovillo8.png" 
          height="100px" width="100px" alt=""/>
        <HiloVerde/>
        </div>
    )
}