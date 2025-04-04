import styles from "../styles/page.module.scss";
import Gallery from "../components/Gallery";
import {images} from "../data/data"

export default function GaleriaHome() {

console.log(images)

    return (
      <section  className={styles.containerGallery}>
        <h1 className={styles.titleSection}>Territorios</h1>
        <Gallery
          images={images}
        />
      </section>
    );
  }