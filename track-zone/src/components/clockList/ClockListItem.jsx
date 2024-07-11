import React from 'react';
import ClockDisplay from "../shared/clockDisplay/ClockDisplay.jsx";
import useClock from "../../hooks/useClock.jsx";
import ClockActions from "../shared/clockActions/ClockActions.jsx";

const ClockListItem = ({clock, updateClock}) => {
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
            <ClockActions clock={clock} updateClock={updateClock} />
        </div>
    );
};

export default ClockListItem;