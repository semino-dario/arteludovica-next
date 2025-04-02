
import HeaderHome from "./components/HeaderHome";
import Musica from "./components/Musica";
import Obras from "./components/Obras";

export default function Home() {
  return (
    <div>
      <HeaderHome/>
      <Obras/>
      <Musica/>
    </div>
  );
}
