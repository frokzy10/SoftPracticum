import React from 'react';
import AppRouter from "../../../app/providers/router/ui/AppRouter";

const DontHeader = () => {
    return (
        <main className="App">
            <div className="AppContainer">
                <div className="content">
                    <AppRouter/>
                </div>
            </div>
        </main>
    );
};

export default DontHeader;