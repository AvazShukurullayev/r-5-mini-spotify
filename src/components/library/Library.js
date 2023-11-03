import React from "react"
import "./_library.scss"
import {LibrarySong} from "../index";

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div
            className={`shadow position-fixed top-0 bottom-0 start-0 w-25 h-100 bg-dark text-light 
            ${libraryStatus ? "non-active" : "active"}`}>
            <h2 className={"py-2"}>Library</h2>
            {songs.length ? songs.map(song => <LibrarySong song={song} key={song.id} setCurrentSong={setCurrentSong}
                                                           audioRef={audioRef} isPlaying={isPlaying} songs={songs}
                                                           id={song.id} setSongs={setSongs}/>) : "no data"}
        </div>
    );
};

export default Library;