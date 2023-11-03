import React from 'react';

const LibrarySong = ({song}) => {
    return (
        <div style={{cursor: "pointer"}}
             className={"w-100 d-flex align-items-center py-2 px-1 border " + (song.active ? "bg-black" : "")}g>
            <img src={song.cover} className={"w-25 me-1 rounded-circle"} alt={song.name}/>
            <div className={"w-75"}>
                <h6 className={"m-0 text-truncate"}>{song.name}</h6>
                <p className={"fs-6 m-0 text-truncate"}>{song.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySong;