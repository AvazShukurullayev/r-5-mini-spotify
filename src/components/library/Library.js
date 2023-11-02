import React from "react"
import {LibrarySong} from "../index";

const Library = ({songs, setSongs, setCurrentSong,setIsPlaying}) => {
    return (
        <div className={"library"}>
            <div className="library__songs position-fixed top-0 bottom-0 start-0 w-25 h-100 bg-dark text-light">
                <h2 className={"text-center"}>Library</h2>
                {songs.length ? songs.map(song => <LibrarySong songs={songs} song={song} key={song.id} setSongs={setSongs}
                                                               setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}/>) : "no data"}
            </div>

        </div>
    );
};

export default Library;