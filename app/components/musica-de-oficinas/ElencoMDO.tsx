import ElencoMDOImg from '@/app/assets/svg/ElencoMDOImg';
import styles from '../../styles/page.module.scss';

export default function ElencoMDO() {

    return (
        <section className={styles.elencoMDO}>
        <ElencoMDOImg />
        <img src="/assets/images/imagenes-mdo/nanu-de-pie-2.png" alt="escena de la obra" />
        </section>
    )
}