import React from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import useClock from "./hooks/useClock.jsx";

const App = () => {
    const {clock: local} = useClock()
    const {clock: est} = useClock("EST")
    const {clock: pst} = useClock("PST")
    const {clock: pakistan} = useClock( "UTC", 5*60 )

    console.log('local utc', local.date)
    console.log('EST', est.date)
    console.log('PST', pst.date)
    console.log('Pakistan', pakistan.date)
    return (
        <div>
            <LocalClock/>
            <ClockList/>
        </div>
    );
};

export default App;