

import styles from "../styles/page.module.scss";
import Gallery from "../components/Gallery";

export default function GaleriaHome() {
    return (
      <section >
        <h1 className={styles.titleSection}>Territorios</h1>
        <Gallery/>
      </section>
    );
  }