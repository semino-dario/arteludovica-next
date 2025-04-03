import styles from '../styles/page.module.scss'


interface EquipoCardProps {
    data: {
        image:string,
        name:string,
        desc:string
    }
}

const EquipoCard:React.FC<EquipoCardProps> = ({data}) => {

        return (
          <div>
            {
              data.name === "" ?
              <div></div>
              :
            <div className={styles.equipoCard}>
              <img src={data.image} alt="foto de miembro del equipo" />
              <div className={styles.equipoData}>
                <h3>{data.name}</h3>
                <p>{data.desc}</p>
            </div>
          </div>
          }
          </div>
        )
}

export default EquipoCard