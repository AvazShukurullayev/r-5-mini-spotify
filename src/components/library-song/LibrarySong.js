import React from 'react';

const LibrarySong = ({song}) => {
    return (
        <div className={"library__song"}>
            <img src={song.cover} alt={song.name}/>
            <h4 className={"my-3 text-truncate"}>{song.name}</h4>
            <h6 className={"m-0 text-truncate"}>{song.artist}</h6>
        </div>
    );
};

export default LibrarySong;