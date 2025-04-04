import styles from '../styles/page.module.scss'


interface EquipoCardProps {
    data: {
        image:string,
        name:string,
        desc:string
    }

    onClick: () => void
}

const EquipoCard:React.FC<EquipoCardProps> = ({data, onClick}) => {

        return (
          <div>
            {
              data.name === "" ?
              <div ></div>
              :
            <div className={styles.equipoCard}>
                <img className={styles.equipoCardImage} src={data.image} alt="foto de miembro del equipo" />
              <div className={styles.equipoData}>
                <h3>{data.name}</h3>
                <p>{data.desc}</p>
                <button onClick={onClick}>cerrar</button>
            </div>
          </div>
          }
          </div>
        )
}

export default EquipoCard