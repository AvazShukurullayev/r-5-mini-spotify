import React, {useState} from 'react';
import "./app.scss"
import {Player, Song} from "../components";
import chillhop from "../components/chillhop";

const App = () => {
    const [songs, setSongs] = useState(chillhop())
    const [currentSong, setCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className={"app"}>
            <Song currentSong={currentSong}/>
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        </div>
    );
};

export default App;