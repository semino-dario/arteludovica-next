
import Equipo from "./components/Equipo";
import HeaderHome from "./components/HeaderHome";
import Musica from "./components/Musica";
import Obras from "./components/Obras";
import Territorios from "./components/Territorios";
import Textos from "./components/Textos";

export default function Home() {
  return (
    <div>
      <HeaderHome/>
      <Obras/>
      <Musica/>
      <Textos/>
      <Territorios
      images={["http://www.arteludovica.com.ar/imagenes/imagenes-territorios/escobar-lerchundi/escobar-lerchundi-1.jpg",
         "http://www.arteludovica.com.ar/imagenes/imagenes-territorios/escobar-lerchundi/escobar-lerchundi-2.jpg"]}
      />
      <Equipo/>

    </div>
  );
}
