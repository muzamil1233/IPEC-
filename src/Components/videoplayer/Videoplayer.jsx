
import { useRef } from "react"
import "../videoplayer/videoplayer.css"
import video from "../../edusity_assets/ipecv.mp4"

const Videoplayer = ({playstate  ,setPlayState}) => {
   const closePlayer = (e) => {
    if(e.target === player.current){
        setPlayState(false);
  
    }
   }
    const player =useRef(null);
  return (
    <div className={`video-player ${playstate? '':"hide"}`} ref = {player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Videoplayer
