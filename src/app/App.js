import React, {useRef, useState} from 'react';
import "./app.scss"
import {Library, Player, Song} from "../components";
import chillhop from "../components/chillhop";

const App = () => {
    // State
    const [songs, setSongs] = useState(chillhop())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0})

    // Ref
    const audioRef = useRef(null)

    // Functions
    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo((prevState) => ({...prevState, currentTime: currentTime, duration: duration}))
    }
    return (
        <div className={"app"}>
            <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
            <div className={"m-0 ms-auto w-75"}>
                <Song currentSong={currentSong}/>
                <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                        audioRef={audioRef} timeUpdateHandler={timeUpdateHandler} songInfo={songInfo}
                        setSongInfo={setSongInfo}/>
            </div>
        </div>
    );
};

export default App;