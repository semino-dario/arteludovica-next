"use client"


import styles from '../styles/page.module.scss'
import imageDesktop from '../assets/images/home/IMG_5849.jpg'
import imageMobile from '../assets/images/home/equipo-miniatura.jpg'
import { useState, useEffect } from 'react';
import EquipoCard from './EquipoCard';
import imgDario from '../assets/images/home/portraits/dario.jpg'
import imgDiego from '../assets/images/home/portraits/diego.jpg'
import imgFer from '../assets/images/home/portraits/fer.jpg'
import imgGallo from '../assets/images/home/portraits/gallo.jpg'
import imgLuica from '../assets/images/home/portraits/luica.jpg'
import imgMati from '../assets/images/home/portraits/mati.jpg'
import imgNadia from '../assets/images/home/portraits/nadia.jpg'
import imgTefi from '../assets/images/home/portraits/tefi.jpg'
import imgViqui from '../assets/images/home/portraits/viqui.jpg'


const EquipoImage = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [dataMember, setDataMember] = useState({image:"" , name:"", desc:""});

    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
  
    useEffect(() => {
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  

const data:any = [{name: "Darío Semino", image: imgDario.src, desc: "Dramaturgo - Escribió los textos de “Música de Oficinas” y “Las tejedoras”, realizó la revisión del texto de “El banquete de Platón”. Además es autor de los poemas de la performance “Museo de poemas”. Colaboró también en la producción de las obras, realizando diversas tareas. Y por último desarrolló este sitio."}, {name: "Victoria Montanaro", image: imgViqui.src, desc:'Actriz - Fue Ingresante-Asistente en “Música de Oficinas”, integró el Coro de “Las tejedoras”. En “El Banquete de Platón” interpretó a Diotima. También participó de las performances “Museo de Poemas”, “Libación a los Dioses” y “¿Qué es pensar?"'}, {name: "Matías Palumbo", image:imgMati.src, desc: "Taumaturgo - Fue asistente de luces y sonido en “Música de Oficinas” y colaboró en la producción de “Las tejedoras”, además fue asistente en todas las funciones realizadas en Mimoteatro Escobar - Lerchundi y Casa Ludovica."}, {name: "Estefanía Revas", image:imgTefi.src, desc:"Actriz - Interpretó a la Directora Nro. 1 en “Música de Oficinas” y tuvo el rol protagónico de Angélica en “Las tejedoras”. Participó también de las performances “Museo de Poemas”, “Libación a los Dioses” y “¿Qué es pensar?”."}, {name: "Fernanda Catullo", image: imgFer.src, desc: "Directora y Actriz - Dirigió las tres obras estrenadas y las distintas performances e intervenciones realizadas por la Compañía. Interpretó en “Música de Oficinas” a la Directora Nro. 1, durante la primera temporada de “Las tejedoras” interpretó a la Adivina. Además realizó la adaptación del texto para el Banquete de Platón."}, {name: "Luisina Lorenzo", image: imgLuica.src, desc: "Actriz - Fue Ingresante-Asistente en “Música de Oficinas”, integró el Coro de “Las tejedoras” e interpretó a la Adivina en la segunda temporada de la misma obra. Participó también de las performances “Museo de Poemas”, “Libación a los Dioses” y “¿Qué es pensar?”."},
  {name:"Nadia Cantó", image:imgNadia.src, desc: "Actriz - Fue Ingresante-Asistente en “Música de Oficinas”, integró el Coro de “Las tejedoras” e interpretó a la Adivina en la segunda temporada de la misma obra. Participó también de las performances “Museo de2 Poemas”, “Libación a los Dioses” y “¿Qué es pensar?”."},
  {name:"Diego Semino", image:imgDiego.src, desc:"Actor - Fue Ingresante-Asistente en “Música de Oficinas”, integró el Coro de “Las tejedoras” e interpretó a Alcibíades en “El Banquete de Platón”. Participó también de las performances “Museo de Poemas”, “Libación a los Dioses” y “¿Qué es pensar?”."},
  {name:"Nicolás Gallo", image: imgGallo.src, desc: "Actor - Fue Ingresante-Asistente en “Música de Oficinas”, integró el Coro de “Las tejedoras”. Participó también de las performances “Museo de Poemas”, “Libación a los Dioses” y “¿Qué es pensar?”."}
]



const handleClick = (name:string) =>{
    const element = data.find((item:any) => item.name === name);
    if (element) {
        setDataMember({image:element.image, name:element.name, desc:element.desc});
    }
}



    return (
        <div>
            {
                !isMobile ?
            <div>
                <img className={styles.equipoImg} src={imageDesktop.src}  alt="foto de los miembros del equipo" useMap={"#image-map"}/>
                    <map name="image-map">
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Darío Semino" title="Darío Semino - Dramaturgo"  coords="269,223,287,227,290,263,308,268,314,291,321,309,335,319,352,271,347,256,350,241,345,221,338,188,326,175,299,172,303,152,290,136,277,133,268,139,266,148,266,165,269,177,251,186,246,199,246,226,228,240,244,241,237,242,252,239" shape="poly"/>
                    <area 
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Nicolás Gallo" title="Nicolás Gallo - Actor" coords="316,296,322,311,346,332,292,332,205,332,226,304,247,261,250,252,258,233,268,226,284,229,289,248,287,265,304,268" shape="poly"/>
                    <area 
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Matías Palumbo" title="Matías Palumbo - Taumaturgo de Luces y Sonidos"  coords="226,293,226,237,243,224,242,198,267,173,223,167,212,164,199,138,176,141,163,177,151,214,143,244,162,269,160,283,140,284,159,332,198,332" shape="poly"/>
                    <area 
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Diego Semino" title="Diego Semino - Actor"  coords="103,156,78,170,75,222,72,250,78,267,94,282,97,332,153,332,140,282,156,283,161,270,152,257,140,243,164,168,150,163,140,161,147,135,138,120,117,116,105,130" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                     target="" alt="Nadia Cantó" title="Nadia Cantó - Actriz" coords="122,114,118,89,86,80,87,64,107,51,139,28,151,41,162,32,172,26,187,33,189,47,180,58,170,65,170,77,182,95,184,101,182,129,176,138,165,165,144,158,148,129,138,117" shape="poly"/>
                    <area 
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Luisina Lorenzo" title="Luisina Lorenzo - Actriz" coords="212,158,224,164,229,117,227,76,220,66,223,55,224,34,216,20,194,25,187,54,173,66,172,77,188,102,186,113,183,136,201,137" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Fernanda Catullo" title="Fernanda Catullo - Directora y Actriz"  coords="266,23,259,9,245,8,235,21,234,42,226,48,224,58,228,72,227,165,264,170,264,144,273,133,273,90,277,78,287,68,271,60,264,46" shape="poly"/>
                    <area 
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Estefanía Revas" title="Estefanía Revas - Actriz" coords="353,79,364,71,373,77,372,84,359,90,358,102,354,123,358,132,362,166,375,227,385,262,397,266,395,292,370,262,355,247,339,183,329,173,317,170,303,169,305,153,298,141,288,133,275,131,276,116,274,107,274,90,280,79,291,69,276,60,269,53,264,42,267,29,276,25,290,32,297,41,307,60,323,54,330,61,341,67,343,73,347,82,341,67" shape="poly"/>
                    <area 
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    className={styles.pointer}
                    target="" alt="Victoria Montanaro" title="Victoria Montanaro - Actriz"  coords="357,1,362,15,364,30,380,32,397,43,422,83,422,99,422,111,420,126,435,173,477,174,487,168,499,179,498,188,457,201,415,205,406,181,405,198,398,261,387,261,380,234,379,202,373,180,363,137,360,98,378,83,369,68,359,68,349,72,326,52,326,39,321,26,321,12,323,-1" shape="poly"/>
                </map>
            </div>
            :
            // Mobile version
            <div>
            <img src={imageMobile.src}  alt="foto de los miembros del      equipo" 
            useMap={"#image-map-mobile"}/>
            <map name="image-map-mobile">
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)} target="" className="foto-link2" alt="Darío Semino" title="Darío Semino - Dramaturgo" coords="173,108,176,86,197,90,238,158,217,184,199,155,172,143,158,152,159,136,157,144,160,150,163,119" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Nicolás Gallo" title="Nicolás Gallo - Actor" coords="190,159,224,220,181,220,141,219,154,163,172,152,182,149,190,159" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Matías Palumbo" title="Matías Palumbo - Taumaturgo de Luces y Sonidos" coords="123,93,106,107,99,156,108,183,105,219,138,218,149,171,161,111" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Diego Semino" title="Diego Semino - Actor" coords="47,153,47,210,67,219,103,217,97,171,102,110,93,84,75,75,72,100,48,111" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Nadia Cantó" title="Nadia Cantó - Actriz" coords="93,80,106,104,117,91,120,21,112,14,97,10,91,13,84,15,66,20,53,66" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Luisina Lorenzo" title="Luisina Lorenzo" coords="124,0,147,8,150,106,137,95,118,92,121,17" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Fernanda Catullo" title="Fernanda Catullo - Directora y Actriz" coords="152,2,149,24,152,105,173,105,179,73,178,20,182,0,165,0" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Estefanía Revas" title="Estefanía Revas - Actriz" coords="182,85,200,87,251,188,262,188,234,56,201,25,196,9,185,12,178,25" shape="poly"/>
                    <area
                    onClick={(e) => handleClick(e.currentTarget.alt)}
                    target="" className="foto-link2" alt="Victoria Montanaro" title="Victoria Montanaro - Actriz" coords="270,32,325,124,265,177,237,52,211,30,212,0,236,0,246,16" shape="poly"/>
                </map>

            </div>
}

    <EquipoCard 
      data={dataMember}
    
    />
        </div>
)
    
}



export default EquipoImage;