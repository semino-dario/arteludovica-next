import sytles from "../styles/page.module.scss"
import MenuMDO from "../assets/svg/MenuMDO";
import Organigrama from "../assets/svg/Organigrama";
import NavBar from "../components/Navbar";

export default function MusicaDeoficinasHome() {
    return (
        <div className={sytles.containerMDO} >
        <NavBar/>
        <MenuMDO />
        <Organigrama />
      </div>
    );
  }