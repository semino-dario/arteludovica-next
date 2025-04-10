import CloseIcon from '../assets/svg/CloseIcon';
import PlayIcon from '../assets/svg/PlayIcon';
import styles from '../styles/page.module.scss';

interface VideoPlayerProps {
  imageVideo: string;
  closeVideo?: () => void;
  playVideo: boolean;
  setPlayVideo: (playVideo: boolean) => void;
  videoUrl: string;
}

const VideoPlayer:React.FC<VideoPlayerProps> = ({imageVideo, closeVideo, playVideo, setPlayVideo, videoUrl}) => {


  return (
    <div className={styles.videoContainer}> 
              {!playVideo ?
              <div className={styles.videoMaskContainer}>
                <img src={imageVideo} alt="imagen de Música de Oficinas" />
                <PlayIcon
                onClick={() => setPlayVideo(true)}
                />
              </div>
              :
              <iframe 
                className={styles.video}
                src={videoUrl} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>

              } 
              {closeVideo &&    
              <CloseIcon    
                onClick={closeVideo}
              />}
            </div>
  );
}

export default VideoPlayer;