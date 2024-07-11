import React, {useState} from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import useClock from "./hooks/useClock.jsx";
import ClockDisplay from "./components/shared/clockDisplay/ClockDisplay.jsx";
import {generate} from "shortid";

const App = () => {


    const LOCAL_CLOCK_INIT ={
        title: 'My Clock',
        timezone: '',
        offset: 0,
        date: null,
    }


const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});
    const [clocks, setClocks] = useState([])

    const updateLocalClock = (data) => {
        setLocalClock ({
            ...localClock,
            ...data,
        })
    }
    const createClock = (clock) => {
        clock.id= generate();
        setClocks([...clocks, clock]);
    }


    return (
        <div>
            <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createClock} />
            <br/>
            <ClockList clocks={clocks}/>

        </div>
    );
};

export default App;