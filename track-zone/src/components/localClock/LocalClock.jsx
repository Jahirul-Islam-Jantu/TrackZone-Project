import ClockDisplay from "../shared/clockDisplay/ClockDisplay.jsx";
import ClockActions from "../shared/clockActions/ClockActions.jsx";
import useClock from "../../hooks/useClock.jsx";
import {useEffect} from "react";


const LocalClock = ({clock, updateClock}) => {
    const {date, timezone, offset, } = useClock(clock.timezone, clock.offset);

    useEffect(() => {
        updateClock({
            date,
            timezone,
            offset,
        })
    },[date])

    return (
        <div>
            {date && <ClockDisplay date={date} title={clock.title} timezone={timezone} offset={offset} />}
            <ClockActions local={true} clock={clock}  updateClock={updateClock} />
        </div>
    );
};

export default LocalClock;