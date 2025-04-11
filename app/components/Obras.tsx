import styles from '../styles/page.module.scss';
import TurningCard from './TurningCard';
import imageMDO from "../assets/images/home/volante-musica-de-oficinas.jpeg"
import imageTejedoras from "../assets/images/home/viqui-tejedora.jpeg"
import imageBanquete from "../assets/images/home/diego-banquete.jpeg"



export default function Obras(  ) {
     

    return(
        <section className={styles.containerSection}>
            <h1 className={styles.titleSection}>Obras</h1>
            <p className={styles.textHome}>Podés entrar en cada una para recorrerla.</p>
              <div className={styles.containerObras}> 
              <TurningCard
                image={imageMDO.src}
                title='Música de oficinas'
                subtitle='¿Querés trabajar en al dirección de Organigrama?'
               link='/musica-de-oficinas'
               />
                <TurningCard
                image={imageTejedoras.src}
                title='Las tejedoras'
                subtitle='Una casa llena de sueños y fantasmas'
                link='/las-tejedoras'
                />
                <TurningCard
                image={imageBanquete.src}
                title='El Banquete de Platón'
                subtitle='Pero...¿quién es Eros?'
                link='/el-banquete'
               />
                </div>
        </section>
    )
}