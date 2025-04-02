"use client";
import { useState } from 'react';
import styles from '../styles/page.module.scss';

export default function Textos() {  

  const [showPdf, setShowPdf] = useState(false);

  const showPdfHandler = () => {
    setShowPdf(true);
  }
    return (
        <section className={styles.containerSection}>
          <h1 className={styles.titleSection}>Textos</h1>
          <p className={styles.textHome}>Se pueden descargar en PDF los textos de las últimas dos obras estrenadas.</p>
         <div className={styles.containerTextos}>
          <h2 onClick={showPdfHandler}>Las tejedoras</h2>
          <h2 onClick={showPdfHandler}>El banquete</h2>
         </div>
         {
            showPdf &&
          <div>
            <h1>descargar pdf</h1>
          </div>}
        </section>
    )
}