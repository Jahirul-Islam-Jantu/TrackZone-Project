import React from 'react';

const ClockList = ({clocks}) => {
    return (
        <div>
            <h3>Others Clocks</h3>
            <hr/>
            {clocks.length === 0 ? (<p>There is no clock. Please create one!</p>) : (
                <ul>
                    {clocks.map(clock => (
                        <li key={clock.id}>{JSON.stringify(clock)}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ClockList;