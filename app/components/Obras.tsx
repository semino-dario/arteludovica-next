import styles from '../styles/page.module.scss';
import TurningCard from './TurningCard';

export default function Obras() {
    return(
        <section className={styles.containerSection}>
            <h1 className={styles.titleSection}>Obras</h1>
            <p className={styles.textHome}>Podés entrar en cada una para recorrerla.</p>
                <TurningCard/>
        </section>
    )
}