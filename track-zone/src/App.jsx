import React from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import useClock from "./hooks/useClock.jsx";

const App = () => {
const {date: localDate, timezone, offset} = useClock()



    return (
        <div>
            {localDate !== null && (<LocalClock date={localDate} timezone={timezone} offset={offset}  />)}
            <ClockList/>
        </div>
    );
};

export default App;