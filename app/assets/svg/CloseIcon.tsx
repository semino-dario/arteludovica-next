import styles from '../../styles/page.module.scss';

interface CloseIconProps {
    onClick?: () => void;
}

const CloseIcon:React.FC<CloseIconProps> = ({onClick}) => {
    

    
    return (
        <svg className={styles.closeIcon}  onClick={onClick}  id="cierra-musica" width="40px" height="33px" viewBox="0 0 40 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group">
                <g id="Oval-2" opacity="0" fill="#C14953">
                    <ellipse id="Oval" cx="20" cy="16.5" rx="20" ry="16.5"></ellipse>
                </g>
                <line x1="10.3030303" y1="7.425" x2="29.6969697" y2="25.905" id="Line-2" stroke="#000000" strokeWidth="8" fill="#000000" strokeLinecap="square"></line>
                <line x1="10.3030303" y1="25.905" x2="29.9599158" y2="7.17444524" id="Line" stroke="#E7DBC5" strokeWidth="8" fill="#D8D8D8" strokeLinecap="square"></line>
            </g>
        </g>
    </svg>
    )
}

export default CloseIcon;