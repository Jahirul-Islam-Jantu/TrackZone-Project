import React, {useState} from 'react';
import {generate} from "shortid";

const UseEvents = () => {
    const [state, setState] = useState({})
    const getEventByClockId = (clockId, isArray = false) => {

        const events =  Object.keys(state).filter(item => item.startsWith(clockId))
        if (!isArray) return events
        return Object.values(events)
    }
    const getEvents = (isArray = false) => {
        if (!isArray) return state
        return Object.values(state)
    }
    const addEvent = (event)=>{
        const {id, clockId} = event
        event.id = generate()
        setState(prev => ({
            ...prev,
            [`${clockId}|${id}`]: event
        }))
        return event
    }

    const deleteEvent = (id) => {
        const events = {...state}
        delete events[id]
        setState(events)
    }
    const deleteEventByClock = (clockId) => {
        const events = Object.keys(state).filter((item) => !item.startsWith(clockId))
    }
    const updateEvent = (updatedEvent, id) => {
        const events = {...state}
        events[id] = {
            ...events[id],
            ...updatedEvent,
        }
        setState(events)
    }
    return {
        getEventByClockId,
        getEvents,
        addEvent,
        deleteEvent,
        deleteEventByClock,
        updateEvent,
    }
};

export default UseEvents;