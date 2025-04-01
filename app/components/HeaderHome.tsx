import styles from '../styles/page.module.scss';
import mainImage from "../assets/images/home/mimoteatro-puerta.jpeg"

export default function HeaderHome () {

    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.mainTitle}>Compañía Arteludovica</h1>
            <h2 className={styles.mainSubtitle}>MEMORIAS DE UNA EXPERIANCIA TEATRAL</h2>
            <img className={styles.mainImage} src={mainImage.src} alt="Imagen de la Compañía de teatro" />
            <p className={styles.textHome}>La Compañía Teatral Arteludovica estuvo activa entre 2006 y 2013 en Buenos Aires. Se puede seguir aquí el rastro de su trayectoria.</p>
        </div>
    )
}
