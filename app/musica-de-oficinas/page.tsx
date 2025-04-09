"use client";
import sytles from "../styles/page.module.scss"
import MenuMDO from "../assets/svg/MenuMDO";
import Organigrama from "../assets/svg/Organigrama";
import NavBar from "../components/Navbar";
import { createContext, useState } from "react";


const MDOContext = createContext({section: "", setSection: (section:string) => {}});

export default function MusicaDeoficinasHome() {


const [section, setSection] = useState("musica-de-oficinas");

    return (

        <div className={sytles.containerMDO} >
          <NavBar/>
          <MDOContext.Provider value={{section, setSection}}>
            <MenuMDO />
          </MDOContext.Provider>
          {
            section === "musica-de-oficinas" ?
          <Organigrama />
          :
          <h1 style={{color:"white"}}>{section}</h1>
          }
      </div>
    );

  }

  export {MDOContext}