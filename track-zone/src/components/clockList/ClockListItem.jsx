import React, {useEffect, useState} from 'react';
import {addSeconds, formatDistance} from "date-fns"
import ClockDisplay from "../shared/clockDisplay/ClockDisplay.jsx";
import useClock from "../../hooks/useClock.jsx";
import ClockActions from "../shared/clockActions/ClockActions.jsx";
import useTimer from "../../hooks/useTimer.jsx";

const ClockListItem = ({clock, updateClock, deleteClock, localClock}) => {
    const {date} = useClock(clock.timezone, clock.offset)
    const timer = useTimer(date)


    if(!date || !timer) return null;

    return (
        <div>
            <ClockDisplay
                date={timer}
                title={clock.title}
                timezone={clock.timezone}
                offset={clock.offset}
            />
            <h3>{formatDistance( localClock, timer)}</h3>
            <ClockActions clock={clock} updateClock={updateClock} deleteClock={deleteClock} />
        </div>
    );
};

export default ClockListItem;