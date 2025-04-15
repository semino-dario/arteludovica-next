import styles from '../../styles/page.module.scss'
import React from "react";
import Image from "next/image";

const GaleriaGiratoria: React.FC = () => {
  const cantidadImagenes = 8;

  return (
    <section className={styles.galeriaPrincipalBanquete}>
           <div  className={styles.galeriaGiratoria}>
      {Array.from({ length: cantidadImagenes }).map((_, i) => {
        const numero = i + 1;
        const rutaImagen = `/assets/images/imagenes-banquete/banquete-danza/danza${numero}.webp`;

        return (
     
          <span
            key={numero}
            className={styles.spanes}
            style={{ ["--i" as any]: `${numero}` }}
          >
            <Image
              className={styles.imagenGiratoria}
              src={rutaImagen}
              alt={`Danza ${numero}`}
              width={300}
              height={300}
              loading="lazy"
            />
          </span>
  
        );
      })}
                  </div>
     
        <img className={styles.nadiaFondo} 
        src="/assets/images/imagenes-banquete/banquete-4.png"  
       alt="imagen de la obra"/>
    </section>
  );
};

export default GaleriaGiratoria;
