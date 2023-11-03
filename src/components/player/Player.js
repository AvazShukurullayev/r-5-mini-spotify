import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    // hooks
    const audioRef = useRef(null)
    const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0})

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
    const dragSongHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo((prevState) => ({...prevState, currentTime: e.target.value}))
    }
    return (
        <div className={"container"}>
            <div className="row text-dark">
                <div className="col-9 mx-auto">
                    <div className="time-control d-flex align-items-center justify-content-between">
                        <p className={"m-0 me-2"}>{readableTime(songInfo.currentTime)}</p>
                        <input type="range" className={"form-range"} min="0" max={songInfo.duration}
                               value={songInfo.currentTime} onChange={dragSongHandler}/>
                        <p className={"m-0 ms-2"}>{readableTime(songInfo.duration)}</p>
                    </div>
                    <div className="col-6 mx-auto">
                        <div className="player-control py-5 d-flex align-items-center justify-content-between">
                            <FontAwesomeIcon className={"play"} size={"2x"}
                                             icon={faAngleLeft}/>
                            <FontAwesomeIcon className={"play"} onClick={playSongHandler} size={"2x"}
                                             icon={isPlaying ? faPause : faPlay}/>
                            <FontAwesomeIcon className={"play"} size={"2x"}
                                             icon={faAngleRight}/>
                        </div>
                        <audio onTimeUpdate={songUpdateHandler} onLoadedMetadata={readableTime} src={currentSong.audio}
                               ref={audioRef}></audio>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;