import React from 'react';

const Song = ({currentSong}) => {

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-6 mx-auto py-5 text-center">
                    <img src={currentSong.cover} className={"img-fluid w-50 shadow rounded-circle"} alt={currentSong.name}/>
                    <h4 className={"my-3 text-truncate"}>{currentSong.name}</h4>
                    <h6 className={"m-0 text-truncate"}>{currentSong.artist}</h6>
                </div>
            </div>
        </div>
    );
};

export default Song;