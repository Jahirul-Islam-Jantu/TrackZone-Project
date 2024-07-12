import React, {useEffect, useState} from 'react';
import LocalClock from "./components/localClock/LocalClock.jsx";
import ClockList from "./components/clockList/ClockList.jsx";
import {generate} from "shortid";
import useEvents from "./hooks/useEvents.jsx";

const LOCAL_CLOCK_INIT ={
    title: 'My Clock',
    timezone: '',
    offset: 0,
    date: null,
}

const App = () => {
    const [localClock, setLocalClock] = useState({...LOCAL_CLOCK_INIT});
    const [clocks, setClocks] = useState([])
    const {getEvents, getEventByClockId, addEvent} = useEvents()

    useEffect(() => {

        const event = addEvent({title: "test", clockId: "clockid001"})

        console.log("all events", getEvents())
        console.log("all events Array", getEvents(true))
        console.log("event by id", getEvents())

    }, []);


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
    const updateClock = (updatedClock) => {

        const updatedClocks = clocks.map(clock => {
            if (clock.id === updatedClock.id) return updatedClock;
            return clock;
        })
        setClocks(updatedClocks);
    }
    const deleteClock = (id) => {
        const updatedClocks = clocks.filter((clock) => clock.id !== id)
        setClocks(updatedClocks);
    }


    return (
        <div>
            <LocalClock clock={localClock} updateClock={updateLocalClock} createClock={createClock} />
            <br/>
            <ClockList localClock={localClock.date} clocks={clocks} updateClock={updateClock} deleteClock={deleteClock}/>

        </div>
    );
};

export default App;