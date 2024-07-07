import React from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import useClock from "./hooks/useClock.jsx";

const App = () => {
const {date: localDate} = useClock()



    return (
        <div>
            <LocalClock date={localDate} />
            <ClockList/>
        </div>
    );
};

export default App;