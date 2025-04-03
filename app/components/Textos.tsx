"use client";
import { useState } from 'react';
import styles from '../styles/page.module.scss';
import CloseIcon from '../assets/svg/CloseIcon';
import PdfIcon from '../assets/svg/PdfIcon';

export default function Textos() {  

  const [showPdf, setShowPdf] = useState(false);
  const [pdfName, setPdfName] = useState('');

  const showPdfHandler = (name:string) => {
    setShowPdf(true);
    setPdfName(name);

  }

  const closePdfHandler = () => {
    setShowPdf(false);
    setPdfName('');
  }
    return (
        <section className={`${styles.containerSection}`}>
          <h1 className={styles.titleSection}>Textos</h1>
          <p className={styles.textHome}>Se pueden descargar en PDF los textos de las últimas dos obras estrenadas.</p>
         <div className={styles.containerTextos}>
          <h2 onClick={()=> showPdfHandler("texto-las-tejedoras")}
              className={`${styles.pointer} ${pdfName === "texto-las-tejedoras" ? styles.active : ""}`}
            >Las tejedoras</h2>
          <h2 onClick={()=> showPdfHandler("texto-el-banquete")}
              className={`${styles.pointer} ${pdfName === "texto-el-banquete" ? styles.active : ""}`}
            >
            El banquete</h2>
         </div>
         {
            showPdf &&
          <div className={styles.pdfContainer}>
            <a href={`/pdf/${pdfName}.pdf`} target='_blank' rel='noopener noreferrer'>
            <PdfIcon
            pdfName={pdfName}
            />
            </a>
            <CloseIcon
              onClick={closePdfHandler}
            />
          </div>}
          <div className={styles.borderBottom} ></div>
        </section>
    )
}