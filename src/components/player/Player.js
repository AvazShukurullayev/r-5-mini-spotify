import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    // hooks
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({currentTime: null, duration: null})

    // functions
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }
    const songUpdateHandler = (e) => {
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo((prevState) => ({...prevState, currentTime, duration}))
    }
    const readableTime = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="time-control d-flex align-items-center justify-content-between">
                        <p className={"m-0 me-1"}>{readableTime(songInfo.currentTime)}</p>
                        <input type="range" className={"form-range"}/>
                        <p className={"m-0 ms-1"}>{readableTime(songInfo.duration)}</p>
                    </div>
                    <div className="player-control py-5 d-flex align-items-center justify-content-between">
                        <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleLeft}/>
                        <FontAwesomeIcon className={"play"} onClick={playSongHandler} size={"2x"}
                                         icon={isPlaying ? faPause : faPlay}/>
                        <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleRight}/>
                    </div>
                    <audio onTimeUpdate={songUpdateHandler} onLoadedMetadata={readableTime} src={currentSong.audio} ref={audioRef}></audio>
                </div>
            </div>
        </div>
    );
};

export default Player;