import React, {useState} from 'react';
import "./app.scss"
import {Library, Player, Song} from "../components";
import chillhop from "../components/chillhop";

const App = () => {
    const [songs, setSongs] = useState(chillhop())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className={"app"}>
            <Library songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}/>
            <div className={"m-0 ms-auto w-75"}>
                <Song currentSong={currentSong}/>
                <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            </div>
        </div>
    );
};

export default App;