import ClockDisplay from "../shared/clockDisplay/ClockDisplay.jsx";


const LocalClock = ({date, timezone, offset}) => {
    return (
        <div>
            <ClockDisplay date={date} title={"My Local Clock"} timezone={timezone} offset={offset} />
        </div>
    );
};

export default LocalClock;