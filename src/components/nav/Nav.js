import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus, setLibraryStatus}) => {
    const changeLibraryStatus = () => {
        setLibraryStatus(!libraryStatus)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-9 mx-auto text-dark ">
                    <nav className={"navbar"}>
                        <h1 className={""}>Spotify clone</h1>
                        <button className={"btn btn-sm btn-outline-dark"} onClick={changeLibraryStatus}>
                            Library <FontAwesomeIcon icon={faMusic}/>
                        </button>
                    </nav>
                </div>
            </div>
        </div>

    );
};

export default Nav;