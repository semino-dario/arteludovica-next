import styles from '../styles/page.module.scss'
import EquipoImage from './EquipoImage'

export default function Equipo() {  


    return (
        <section 
            id={"equipo"}
            className={styles.containerSection}>
            <h1 className={styles.titleSection}>Equipo</h1>
            <p className={styles.textHome}>Click en la foto para saber quién es quién...</p>
            <EquipoImage/>
        </section>
    )
}