import React, {useEffect, useState} from 'react';
import {addSeconds} from "date-fns";

const UseTimer = (date) => {
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        setTimer(date)
    }, [date]);

    let timerId = null

    useEffect(()=>{
        if (!timer|| timerId !== null) return;
        timerId = setInterval(()=>{
            setTimer(addSeconds(timer, 1))
        },1000)
        return () => {
            clearInterval(timerId);
        }
    },[timer])
    return timer;
};

export default UseTimer;