import React from 'react';
import {playSong} from "../util";

const LibrarySong = ({song, setCurrentSong, audioRef, isPlaying, songs, id, setSongs}) => {
    const songSelectHandler = () => {
        setCurrentSong(song)
        playSong(isPlaying,audioRef)

        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {...song, active: true}
            } else {
                return {...song, active: false}
            }
        })
        setSongs(newSongs)
    }
    return (
        <div onClick={songSelectHandler} style={{cursor: "pointer"}}
             className={`w-100 d-flex align-items-center py-2 px-1 border ${song.active ? "bg-black" : ""}`}>
            <img src={song.cover} className={"w-25 me-1 rounded-circle"} alt={song.name}/>
            <div className={"w-75"}>
                <h6 className={"m-0 text-truncate"}>{song.name}</h6>
                <p className={"fs-6 m-0 text-truncate"}>{song.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySong;