import React, {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null)
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="time-control d-flex align-items-center justify-content-between">
                        <p className={"m-0 text-truncate"}>Start time</p>
                        <input type="range" className={"w-50"} name="" id=""/>
                        <p className={"m-0 text-truncate"}>End time</p>
                    </div>
                    <div className="player-control py-5 d-flex align-items-center justify-content-between">
                        <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleLeft}/>
                        <FontAwesomeIcon className={"play"} onClick={playSongHandler} size={"2x"}
                                         icon={isPlaying ? faPause : faPlay}/>
                        <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleRight}/>
                    </div>
                    <audio src={currentSong.audio} ref={audioRef}></audio>
                </div>
            </div>
        </div>
    );
};

export default Player;