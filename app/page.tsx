"use client";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import HeaderHome from "./components/HeaderHome";
import Musica from "./components/Musica";
import NavBar from "./components/Navbar";
import Obras from "./components/Obras";
import Territorios from "./components/Territorios";
import Textos from "./components/Textos";


export default function Home() {
  return (
    <div >
      <NavBar/>
      <HeaderHome/>
      <Obras/>
      <Musica/>
      <Textos/>
      <Territorios
      images={["/assets/images/territorios/escobar-lerchundi/escobar-lerchundi-1.jpg",
        "/assets/images/territorios/escobar-lerchundi/escobar-lerchundi-3.jpg", "/assets/images/territorios/grabacion/grabacion-1.jpg"]}
      />
      <Equipo/>
      <Footer/>
    </div>
  );
}
