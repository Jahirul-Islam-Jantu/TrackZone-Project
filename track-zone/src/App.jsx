import React from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import useClock from "./hooks/useClock.jsx";
import ClockDisplay from "./components/shared/clockDisplay/ClockDisplay.jsx";

const App = () => {
const {date: localDate, localTimezone, localOffset} = useClock()




    return (
        <div>
            {localDate !== null && (<LocalClock date={localDate} timezone={localTimezone} offset={-localOffset}  />)}
            <ClockList/>

        </div>
    );
};

export default App;