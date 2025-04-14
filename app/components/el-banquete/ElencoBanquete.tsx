import styles from '../../styles/page.module.scss'

export default function ElencoBanquete () {

    return (
        <section className={styles.sectionBanqueteContainer}>
            <ul>
                <li>Adaptación: María Fernanda Catullo
                </li>
                <li>Actúan: Nadia Cantó, Félix Coll, Leandro Crovetto, Eugenia Gimenez, Mailen Goldar, Betiana Grilanc, Daniel A. Liñares, Victoria Montanaro, Ariel Ragusa, Diego Semino, Rolo Sosiuk, Fedra Urquiza Viola</li>
                <li>Vestuario: Fernanda Crovetto</li>
                <li>Diseño de objetos: Paula Grilanc</li>
                <li>Música: Rodolfo Arbe, Diego López</li>
                <li>Fotografía: Agostina Centurión </li>
                <li>Diseño gráfico: Agostina Centurión, Leandro Crovetto</li>
                <li>Asistencia de dirección: Sol Heffesse</li>
                <li>Dirección: María Fernanda Catullo</li>
            </ul>
            <img  src="assets/images/imagenes-banquete/banquete-9.png" 
            className={styles.imageElenco} alt="Escena del Banquete"/>
            </section>
    )
}