import React from 'react';
import ClockListItem from "./ClockListItem.jsx";

const ClockList = ({clocks, updateClock}) => {
    return (
        <div>
            <h3>Others Clocks</h3>
            <hr/>
            {clocks.length === 0 ? (<p>There is no clock. Please create one!</p>) : (
                <div>
                    {clocks.map(clock => (
                        <ClockListItem clock={clock} key={clock.id} updateClock={updateClock} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClockList;