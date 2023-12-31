import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import {playSong} from "../util";

const Player = ({
                    currentSong,
                    isPlaying,
                    setIsPlaying,
                    audioRef,
                    timeUpdateHandler,
                    songInfo,
                    setSongInfo,
                    songs,
                    setSongs,
                    setCurrentSong
                }) => {

    // useEffects
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {...song, active: true}
            } else {
                return {...song, active: false}
            }
        })
        setSongs(newSongs)
    }, [currentSong]);

    // functions
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const readableTime = (time) => {
        return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }

    const dragSongHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...setSongInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = (direction) => {
        let currentSongIndex = songs.findIndex((song) => song.id === currentSong.id)
        if (direction === "skip-forward") {
            setCurrentSong(songs[(currentSongIndex + 1) % songs.length])
        }
        if (direction === "skip-back") {
            if ((currentSongIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1])
            } else {
                setCurrentSong(songs[(currentSongIndex - 1) % songs.length])
            }
        }
        playSong(isPlaying, audioRef)
    }

    return (
        <div className={"container"}>
            <div className="row text-dark">
                <div className="col-9 mx-auto">
                    <div className="time-control d-flex align-items-center justify-content-between">
                        <p className={"m-0 me-2"}>{readableTime(songInfo.currentTime)}</p>
                        <input type="range" className={"form-range"} min="0" max={songInfo.duration || 0}
                               value={songInfo.currentTime} onChange={dragSongHandler}/>
                        <p className={"m-0 ms-2"}>{songInfo.duration ? readableTime(songInfo.duration) : "0:00"}</p>
                    </div>
                    <div className="col-6 mx-auto">
                        <div className="player-control py-5 d-flex align-items-center justify-content-between">
                            <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleLeft}
                                             onClick={() => skipTrackHandler("skip-back")}/>
                            <FontAwesomeIcon className={"play"} onClick={playSongHandler} size={"2x"}
                                             icon={isPlaying ? faPause : faPlay}/>
                            <FontAwesomeIcon className={"play"} size={"2x"} icon={faAngleRight}
                                             onClick={() => skipTrackHandler("skip-forward")}/>
                        </div>
                        <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={readableTime} src={currentSong.audio}
                               ref={audioRef}></audio>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;