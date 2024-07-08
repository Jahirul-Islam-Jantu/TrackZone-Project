import React from 'react';

const ClockDisplay = ({date, title, timezone, offset}) => {
    const offsetHr = offset / 60;
    return (
        <div>
            <h1>Title: {title}</h1>
            <h3>{ date.toString() }</h3>
            <p>{timezone}  {offsetHr > 0? `+ ${Math.abs(offsetHr)}` : ` - ${Math.abs(offsetHr)}`}</p>
        </div>
    );
};

export default ClockDisplay;