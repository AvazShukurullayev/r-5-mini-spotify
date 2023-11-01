import React from 'react';
import "./app.scss"
import {Player, Song} from "../components";

const App = () => {
    return (
        <div className={"app"}>
            <Song/>
            <Player/>
        </div>
    );
};

export default App;