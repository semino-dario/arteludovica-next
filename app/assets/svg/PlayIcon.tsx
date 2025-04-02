import styles from '../../styles/page.module.scss';

interface PlayIconProps {
    onClick?: () => void;
}
const PlayIcon:React.FC<PlayIconProps> = ({onClick})=>{

    return(
        <svg onClick={onClick} xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={styles.playIcon}><circle cx='12' cy='12' r='10'></circle><polygon points='10 8 16 12 10 16 10 8'></polygon></svg>

    )
}

export default PlayIcon;