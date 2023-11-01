import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlay} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
        <div className={"container"}>
            <div className="time-control mx-auto w-50 d-flex align-items-center justify-content-between">
                <p>Start time</p>
                <input type="range" name="" id=""/>
                <p>End time</p>
            </div>
            <div className="player-control py-5 mx-auto d-flex w-50 align-items-center justify-content-between">
                <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleLeft}/>
                <FontAwesomeIcon className={"play"} size={"2x"} icon={faPlay}/>
                <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleRight}/>
            </div>
        </div>
    );
};

export default Player;