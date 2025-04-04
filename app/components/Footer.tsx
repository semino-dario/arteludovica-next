import styles from '../styles/page.module.scss'

export default function Footer() {

    return (
        
        <section className={`${styles.containerSection} ${styles.footer}`}>
            <div className={styles.borderBottom}></div>
            <h1 className={styles.titleSection}>Colofón</h1>
            <p className={styles.textHome}>Este sitio comenzó a estar en línea en abril de 2023. <br /> Muchas gracias por tu visita.</p>
            <a className={styles.linkHome} target='_blank' href="https://arteludovica.blogspot.com/">Visita el viejo blog de la compañía</a>
            <div><p className={styles.textHome}>Sitio desarrollado por </p>
            <a className={styles.linkHome} target='_blank' href="https://www.linkedin.com/in/dario-semino/">Darío Semino</a>
            </div>
        </section>
    )
}