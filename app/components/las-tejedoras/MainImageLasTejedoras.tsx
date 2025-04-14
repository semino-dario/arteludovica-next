"use client"

import { useEffect, useState } from 'react'
import styles from '../../styles/page.module.scss'
import { useMobile } from '@/app/lib/useMobile'

export default function MainImageLasTejedoras () {

const [showPhantom, setShowPhantom] = useState(false)
const mobile = useMobile()

useEffect( ()=> {
  setShowPhantom(true)
  
}, [])

    return (
        <section className={styles.containerMainImageLasTejedoras} >
          {
            mobile ?
          <div >
            <img className={`${styles.caraFantasma} 
            ${showPhantom ? styles.phantomOpacity : ""}`}  
            src="/assets/images/imagenes-tejedoras/cara-fantasma.png" alt="fantasma"/>
            <img  className={styles.nadiaTejiendo} src="/assets/images/imagenes-tejedoras/tejedoras-17.jpg" alt="tejedora"/>
          </div>
          :
          <div >
            <img className={`${styles.luisinaFantasma}
             ${showPhantom ? styles.phantomOpacity : ""}`}  
            src="assets/images/imagenes-tejedoras/luisina-fantasma.png" width="100px" height="180px"alt=""/>
            <img className={`${styles.imagenDiegoPistola} 
            ${showPhantom ? styles.phantomOpacity : ""}`}  
            src="assets/images/imagenes-tejedoras/diego-pistola.png" width="200px" height="170px"alt=""/>
            <img className={styles.imagenTejedoras}  src="assets/images/imagenes-tejedoras/tejedoras-15.jpg" alt="Las tejedoras" width="650px" height="50%" />
          </div>

}
        </section>
    )
}