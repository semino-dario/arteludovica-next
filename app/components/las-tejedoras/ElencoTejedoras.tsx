import styles from '../../styles/page.module.scss'
import OvilloVerde from './OvilloVerde'

export default function ElencoTejedoras () {
    return (
        <section className={styles.elencoContainer}>
                  <img className={styles.imagenElenco} 
                    src="assets/images/imagenes-tejedoras/elenco-tejedoras.jpg" 
                    alt="elenco de las tejedoras"/>
            <div>
                <ul className={styles.elencoList}>
                    <li>Autor: Darío Semino</li>
                    <li>Dirección: María Fernanda Catullo</li>
                    <li>Isaura: Nadia Cantó</li>
                    <li>Angélica: Estefanía Revas</li>
                    <li>Adivina: Luisina Lorenzo // María Fernanda Catullo</li>
                    <li>Coro de Ilusiones-Fantasmas-Recuerdos: <br/> Nicolás Gallo, Luisina Lorenzo, Victoria Montanaro, Diego Semino </li>
                    <li>Diseño sonoro: Diego Montanaro</li>
                    <li>Fotografía y Diseño Gráfico: Agostina Centurión</li>
                    <li>Asistente de producción: Matías Palumbo</li>
                    <li>Prensa: Laura Castillo</li>
                </ul>
                <OvilloVerde/>
            </div>
        </section>
    )
}