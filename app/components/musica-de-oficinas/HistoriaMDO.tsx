import styles from "../../styles/page.module.scss";

export default function HistoriaMDO () {

    return (
        <section className={styles.historiaMDO}>
            <div className={styles.historiaMDO__resume}>
            <p>Una joven ingresa a trabajar en la Dirección de Organigrama,
                 un lugar caótico y plagado de conflictos. Allí deberá pasar por duras y extrañas
                  pruebas que la llevarán a descubrir que ella es un objeto más al que se desea controlar.
                  Una mirada corrosiva sobre las instituciones, el poder y la libertad.</p>
            </div>
        <div className={styles.historiaMDO__section}>
            <div>
            <h3>Funciones</h3>
            <p>
            Música de Oficinas se estrenó en enero de 2007 en el sala de teatro de Liberarte, Av. Corrientes 1555, Ciudad de Buenos Aires.
             Ese año estuvo en cartel hasta el mes de junio. En 2008 la obra estuvo en cartel en la Sala Mimoteatro-Escobar Lerchundi, Defensa 611,
              Ciudad de Buenos Aires los meses de abril y mayo. En 2009 volvió a estar en cartel en el mes de marzo en la misma sala.</p>
            <br />
            <p>También se realizaron funciones especiales de la obra, según se detalla a continuación:</p>
            <ul>
                <li>Diciembre de 2009, función especial para la Sociedad Iberoamericana de Gerontología en la Defensoría del Pueblo de la Ciudad Autónoma de Buenos Aires.</li>
                <li>Marzo de 2009, función en el espacio Summum Bar Cutural, en Hipólito Yrigoyen 3666, Lanús, Provincia de Buenos Aires.</li>
                <li>Agosto de 2007, función especial para participantes del Congreso Internacional Gerontovida “Compromiso por la Vida”, organizado por la Defensoría de la Tercera Edad de la CABA y la Sociedad Iberoamericana de Gerontología. Teatro Liberarte.</li>
                <li>Octubre de 2006, Teatro Colonial, Ciudad Autónoma de Buenos Aires. Función experimental (ensayo abierto).</li>
            </ul>
            </div>
            <img src="/assets/images/imagenes-mdo/mdo-fer-leyendo.png" alt="escena de la obra" /> 
        </div>
        <hr />
        <div className={styles.historiaMDO__section}>
            <div>
            <h3>Otras actividades relacionadas con la obra:</h3>
            <ul>
                <li> <p> <strong>Edición de Música de Oficinas (libro + CD con la música de la obra)</strong></p>
                <p>
                Presentación del libro y el CD en la librería Fedro Espacio de Arte, Carlos Calvo 578, 
                el 10 de noviembre de 2007. En el evento se realizó una primera exposición de la muestra fotográfica
                 itinerante “Música de Oficinas. Ojos Mirando”. También se llevó a cabo una intervención teatral a 
                 cargo de integrantes de la compañía y finalmente se cerró el evento con un recital de Odamil Yotsé. </p></li>
                 <li><p> <strong>Participación del Festival de videoarte organizado por Canal (á) </strong></p>
               <p> La obra realizada por Adriel Corias Iacovino, titulada “Cueva de Ingrid 1”, inspirada en uno de los
                  temas del mismo nombre incluido en el CD de Odamil Yotsé, se ha encontrado entre los videos más vistos
                   del festival “Arte en Video (toma 2)” organizado por Canal (à). </p> </li>
                <li> <p> <strong> Muestra Fotográfica Itinerante. Música de Oficinas. </strong> </p>
                <p>La muestra se inauguró el día de 10 de noviembre de 2007 en el evento de presentación del libro-CD "Música de Oficinas"
                 en Fedro Espacio de Arte. Participó en la 6ta, 7ma y 8va Feria del Libro Independiente y (A). Pudo visitarse durante
                  los meses de marzo y abril de 2008 en Liberarte Bodega Cultural. Ese mismo año una selección de fotos de Agostina Centurión
                   participó de la muestra “Recoleta Comparte. Arte Joven sin Selección” en la sala 9 del Centro Cultural Recoleta del 11 al 27 de julio. </p></li>
            </ul>
            </div>
             <img src="/assets/images/imagenes-mdo/nanu-tefi.png" alt="escena de la obra" /> 
        </div>
            

        </section>
    )
}