"ºuse client"
import { useState } from 'react';
import styles from '../styles/page.module.scss';
import CriticasButton from '../assets/svg/CriticasButton';

interface Critica {
  extract: string;
  title: string;
  text: string;
}

interface CriticasProps {
  criticas: Critica[]


}


const Criticas:React.FC<CriticasProps> = ({criticas}) => {

  

const [showFullText, setShowFullText] = useState(false);
const [index, setIndex] = useState(0);

const nextCritica = () => {
  index < criticas.length - 1 ? setIndex(index+1) : setIndex(0)}

const prevCritica = () => {
  index < criticas.length - 1 ? setIndex(index+1) : setIndex(0)
}
    return (  
              <section className={styles.criticasContainer}>      
                <div className={styles.criticasExtract}>
                    <p>{criticas[index].extract}</p>
                    <h2>{criticas[index].title}</h2>
                    { !showFullText && 
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