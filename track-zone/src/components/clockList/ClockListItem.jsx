import React from 'react';
import {formatDistance} from "date-fns"
import ClockDisplay from "../shared/clockDisplay/ClockDisplay.jsx";
import useClock from "../../hooks/useClock.jsx";
import ClockActions from "../shared/clockActions/ClockActions.jsx";

const ClockListItem = ({clock, updateClock, deleteClock, localClock}) => {
    const {date} = useClock(clock.timezone, clock.offset)
    if(!date) return null;

    return (
        <div>
            <ClockDisplay
                date={date}
                title={clock.title}
                timezone={clock.timezone}
                offset={clock.offset}
            />
            <h3>{formatDistance( localClock, date)}</h3>
            <ClockActions clock={clock} updateClock={updateClock} deleteClock={deleteClock} />
        </div>
    );
};

export default ClockListItem;