import React from 'react';

const Song = () => {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col col-6 mx-auto py-5">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>Song name</h2>
                        </div>
                        <div className="card-body">
                            <img src="" alt=""/>
                        </div>
                        <div className="card-footer">
                            <h5>Artist</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Song;