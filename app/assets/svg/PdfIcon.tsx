import styles from "../../styles/page.module.scss";

interface PdfIconProps {
    pdfName: string;
}

const PdfIcon:React.FC<PdfIconProps> = ({pdfName}) => {

  
    return(
        <div>
        <svg
        className={styles.pointer}
        width="99px" height="104px" viewBox="0 0 99 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g  id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g className={styles.iconHover} fill="#E7DBC5">
                <path className="icono-svg" d="M52.8865474,50.1177738 L71.5733631,67.3215089 C73.6049376,69.1918474 73.7356453,72.3549728 71.8653068,74.3865474 C70.9185725,75.4148968 69.5846027,76 68.1868157,76 L30.8131843,76 C28.0517605,76 25.8131843,73.7614237 25.8131843,71 C25.8131843,69.602213 26.3982875,68.2682433 27.4266369,67.3215089 L46.1134526,50.1177738 C48.027362,48.3557619 50.972638,48.3557619 52.8865474,50.1177738 Z" id="Triangle"  transform="translate(49.500000, 61.500000) scale(1, -1) translate(-49.500000, -61.500000) "></path>
                <line x1="23.3375" y1="82.5" x2="76.6625" y2="82.5" id="Line-3" stroke="#000000" strokeWidth="5" strokeLinecap="square"></line>
                <text id="PDF" fontFamily="AmericanTypewriter, American Typewriter" fontSize="21" fontWeight="normal" fill="#000000">
                    <tspan x="28.668" y="35">PDF</tspan>
                </text>
            </g>
        </g>
    </svg>
    <h3 className={styles.textHome}>{`${pdfName}.pdf`}</h3>
    </div>
    )
}

export default PdfIcon;