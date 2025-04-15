import styles from "../styles/page.module.scss";
import Gallery from "../components/Gallery";
import {images} from "../data/data"
import NavBar from "../components/Navbar";

export default function GaleriaHome() {

console.log(images)

    return (
      <section  className={styles.containerGallery}>
        <NavBar/>
        <h1 className={styles.titleSection}>Territorios</h1>
        <Gallery
          images={images}
        />
      </section>
    );
  }