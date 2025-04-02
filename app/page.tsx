
import HeaderHome from "./components/HeaderHome";
import Musica from "./components/Musica";
import Obras from "./components/Obras";
import Textos from "./components/Textos";

export default function Home() {
  return (
    <div>
      <HeaderHome/>
      <Obras/>
      <Musica/>
      <Textos/>
    </div>
  );
}
