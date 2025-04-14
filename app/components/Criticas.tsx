"ºuse client"
import { useState } from 'react';
import styles from '../styles/page.module.scss';
import CriticasButton from '../assets/svg/CriticasButton';

interface Critica {
  extract: string;
  title: string;
  text?: string;
}

interface CriticasProps {
  criticas: Critica[]


}


const Criticas:React.FC<CriticasProps> = ({criticas}) => {

  

const [showFullText, setShowFullText] = useState(false);
const [index, setIndex] = useState(0);

const nextCritica = () => {
  if (index < criticas.length - 1) {
    setIndex(index + 1);
  } else {
    setIndex(0);
  }
};

const prevCritica = () => {
  if (index > 0) {
    setIndex(index - 1);
  } else {
    setIndex(criticas.length - 1);
  }
};
    return (  
              <section className={styles.criticasContainer}> 
              { !criticas[index].text &&
              <div className={styles.comentariosHeader} >
                <h2>Comentarios del público</h2>
                <p>Registrados durante las funciones de 2013
                Se pueden ver más comentarios en 
                 </p> <a href="https://www.alternativateatral.com/opiniones27837-el-banquete-de-platon" target='_blank'>
                 ALTERNATIVA TEATRAL
                </a>  
              </div>}
                <div className={styles.criticasExtract}>
                    <p>{criticas[index].extract}</p>
                    <h2>{criticas[index].title}</h2>
                    { !showFullText && criticas[index].text &&
                    <p className={styles.showFullText} 
                    onClick={()=> setShowFullText(true)}>ver texto completo</p>
                    }
                </div>
                <CriticasButton
                    nextText={nextCritica}
                    prevText={prevCritica}
                    />
                {showFullText &&
                <div className={styles.fullText}>
                  <div dangerouslySetInnerHTML={{__html: `${criticas[index].text}`}} />
                  <p className={styles.showFullText} onClick={()=> setShowFullText(false)} >cerrar</p>
                </div>}
              </section>       
            )
}

export default Criticas;