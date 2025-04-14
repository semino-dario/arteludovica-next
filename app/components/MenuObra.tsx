import { useContextMenu } from '../context/ContextMenu';
import styles from '../styles/page.module.scss'

interface MenuObraProps{
  addStyle:string
}

const MenuObra:React.FC<MenuObraProps> = ({addStyle}) => {


const { section, setSection } = useContextMenu();


const handleClick = (tagName:string) => {

    if (section !== tagName) {
    setSection(tagName)

}

else {
    setSection("main-image")
}
}

    return (
        <div className={`${styles.menuObra} ${addStyle}`}>
          <p onClick={()=>handleClick("historia")}
            className={`${section === "historia" ? styles.selecetdItem : ""}`}
            >historia</p>
          <p onClick={()=>handleClick("elenco")}
             className={`${section === "elenco" ? styles.selecetdItem : ""}`}
            >elenco</p>
          <p onClick={()=>handleClick("criticas")}
             className={`${section === "criticas" ? styles.selecetdItem : ""}`}
            >críticas</p>
          <p onClick={()=>handleClick("galeria")}
             className={`${section === "galeria" ? styles.selecetdItem : ""}`}
            >galería</p>
        </div>
    )
}

export default MenuObra