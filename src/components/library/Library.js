import React from "react"
import {LibrarySong} from "../index";

const Library = ({songs}) => {
    return (
        <div className={"library"}>
            <h2>Library</h2>
            <div className="library__songs">
                {songs.length ? songs.map(song => <LibrarySong song={song} key={song.id}/>) : "no data"}
            </div>

        </div>
    );
};

export default Library;