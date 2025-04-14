import styles from '../../styles/page.module.scss'
import OvilloAmarillo from './OvilloAmarillo'

export default function HistoriaTejedoras () {

    return(

  <section className={styles.historiaTejedoras}>
    <div className={styles.imagenHistoriaContainer} >
    <img className={styles.imagenHistoriaTejedoras} src="assets/images/imagenes-tejedoras/viqui-mirando.jpg" alt="historia de las tejedoras"  />
  <div className={styles.textoHistoriaTejedoras}>
    <p>Isaura y Angélica son dos hermanas que pasan su tiempo tejiendo y charlando en una casona de Floresta. Pero sus vidas no son nada tranquilas, el peligro de ser víctimas de un crimen, la paranoia, la amnesia y los ecos de un pasado oscuro se enredan en sus días y sus noches. Las paredes de la casa encierran secretos y desgracias antiguas. Entre agujas y conversaciones triviales se desteje un destino y se teje una desgracia.</p>
    <OvilloAmarillo/>
  </div>
  
  </div>
  <div className={styles.funcionesTejedoras}>
    <h3>Funciones:</h3> <br/>
    <ul><li>Se realizaron funciones el 11 de junio y el 06 de agosto del 2011 en La Libre – Arte y Libros (espacio cultural, librería y galería de arte). </li>
    <li>La obra se presentó en la Casa Ludovica, Moreto 561, Ciudad Autónoma de Buenos Aires, los sábados de septiembre a noviembre del año 2009. El espacio utilizado es una vieja casa del barrio de Floresta que se adaptó para la realización de la puesta en el ámbito natural de los personajes de la obra. La obra se repuso en el mismo espacio en septiembre del 2010. </li>
    <li>“Las tejedoras” se estrenó en junio de 2009 en Mimoteatro Escobar Lerchundi, Defensa 611, Ciudad Autónoma de Buenos Aires, estando en cartel los meses de junio y julio. </li> </ul>
  </div>
  </section>

    )
}