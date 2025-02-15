import React from 'react';

import ClockListItem from "./ClockListItem.jsx";

const ClockList = ({clocks, updateClock, deleteClock, localClock}) => {
    return (
        <div>
            <h3>Others Clocks</h3>
            <hr/>
            {clocks.length === 0 ? (<p>There is no clock. Please create one!</p>) : (
                <div>
                    {clocks.map(clock => (
                        <ClockListItem clock={clock} localClock={localClock} key={clock.id} updateClock={updateClock} deleteClock={deleteClock} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClockList;