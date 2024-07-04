import React from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";

const App = () => {
    return (
        <div>
            <LocalClock/>
            <ClockList/>
        </div>
    );
};

export default App;