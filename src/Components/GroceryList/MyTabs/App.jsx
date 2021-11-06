import React from 'react';
import './App.css';
import MyTabs from "./MyTabs";


function App() {
    return (
        <div>
            <h1>Tabs Demo</h1>
            <MyTabs>
                <div label="Gator">
                    See ya later, <em>Alligator</em>!
                </div>
                <div label="Croc">
                    After 'while, <em>Crocodile</em>!
                </div>
                <div label="Sarcosuchus">
                    Nothing to see here, this tab is <em>extinct</em>!
                </div>
            </MyTabs>
        </div>
    );
}

export default App;