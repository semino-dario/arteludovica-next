import styles from '../../styles/page.module.scss'

interface CriticasButtonProps{
    nextText: () => void
    prevText: () => void
}

const CriticasButton:React.FC<CriticasButtonProps> = ({nextText, prevText}) => {

    return(
        <div className={styles.botonesCriticas}>

      <div className="critica-anterior">
        <svg onClick={prevText} className="criticas-svg" width="25px" height="25px" viewBox="0 0 28 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g  id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g className={styles.criticasSvg} id="Group-4-Copy" transform="translate(0.500000, 0.500000)" fill="#E7DBC5">
                    <path d="M17.1040067,6.98524464 L23.7385773,20.7647375 C24.6969363,22.7551755 23.860271,25.1456477 21.8698331,26.1040067 C21.3284931,26.3646519 20.7353909,26.5 20.1345706,26.5 L6.86542935,26.5 C4.65629035,26.5 2.86542935,24.709139 2.86542935,22.5 C2.86542935,21.8991797 3.00077746,21.3060776 3.26142267,20.7647375 L9.89599332,6.98524464 C10.8543523,4.99480671 13.2448245,4.15814144 15.2352625,5.11650044 C16.0519099,5.50970103 16.7108061,6.16859725 17.1040067,6.98524464 Z" id="Triangle-Copy" transform="translate(13.500000, 13.000000) scale(1, -1) rotate(-90.000000) translate(-13.500000, -13.000000) "></path>
                </g>
            </g>
        </svg>
      </div>
      <div className={styles.criticaSiguiente}>
        <svg onClick={nextText} id="boton-critica-siguiente" width="25px" height="25px" viewBox="0 0 28 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g className={styles.criticasSvg} id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g className={styles.criticasSvg}  id="Group-4-Copy" transform="translate(0.500000, 0.500000)" fill="#E7DBC5">
                    <path d="M17.1040067,6.98524464 L23.7385773,20.7647375 C24.6969363,22.7551755 23.860271,25.1456477 21.8698331,26.1040067 C21.3284931,26.3646519 20.7353909,26.5 20.1345706,26.5 L6.86542935,26.5 C4.65629035,26.5 2.86542935,24.709139 2.86542935,22.5 C2.86542935,21.8991797 3.00077746,21.3060776 3.26142267,20.7647375 L9.89599332,6.98524464 C10.8543523,4.99480671 13.2448245,4.15814144 15.2352625,5.11650044 C16.0519099,5.50970103 16.7108061,6.16859725 17.1040067,6.98524464 Z" id="Triangle-Copy" transform="translate(13.500000, 13.000000) scale(1, -1) rotate(-90.000000) translate(-13.500000, -13.000000) "></path>
                </g>
            </g>
        </svg>
      </div>
</div>
    )
}

export default CriticasButton;