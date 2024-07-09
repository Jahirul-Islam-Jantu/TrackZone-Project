import React, {useState} from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import useClock from "./hooks/useClock.jsx";
import ClockDisplay from "./components/shared/clockDisplay/ClockDisplay.jsx";

const App = () => {


    const LOCAL_CLOCK_INIT ={
        title: 'My Clock',
        timezone: '',
        offset: 0,
        date: null,
    }


const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});

    const updateLocalClock = (data) => {
        setLocalClock ({
            ...localClock,
            ...data,
        })
    }


    return (
        <div>
            <LocalClock clock={localClock} updateClock={updateLocalClock} />
            <ClockList/>

        </div>
    );
};

export default App;