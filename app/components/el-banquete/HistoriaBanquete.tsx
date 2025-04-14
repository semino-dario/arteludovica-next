import styles from '../../styles/page.module.scss'

export default function HistoriaBanquete () {

    return (
      <section className={styles.historiaBanqueteContainer}>  
        <div>
            <p>
            Celebrando el triunfo de Agatón en la máxima competencia poética de la Grecia ática se reúnen Sócrates, Fedro, Pausanias, Erixímaco, Aristófanes y otros y deciden dedicar el banquete a Eros. Uno a uno se suceden los discursos develándonos cada vez un aspecto nuevo e inesperado de este. ¿dios? Sorprendiéndonos, interpelándonos ¿quién es Eros?
            </p>
            <br />
            <p>
            En esta puesta la danza, la música y el teatro confluyen para dar cuenta de la riqueza poética y filosófica de este diálogo e intenta acercar al espectador contemporáneo a un texto nuclear del pensamiento occidental.
            </p>
        </div>
        <img className="imagen-seccion lazy" src="/assets/images/imagenes-banquete/banquete-7.png" 
        alt="Escena del Banquete"/>
        </section>

    )
}