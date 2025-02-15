import ClockDisplay from "../shared/clockDisplay/ClockDisplay.jsx";
import ClockActions from "../shared/clockActions/ClockActions.jsx";
import useClock from "../../hooks/useClock.jsx";
import {useEffect} from "react";
import useTimer from "../../hooks/useTimer.jsx";


const LocalClock = ({clock, updateClock, createClock}) => {
    const {date, timezone, offset, } = useClock(clock.timezone, clock.offset);
    const timer = useTimer(date)

    useEffect(() => {
        updateClock({
            date,
            timezone,
            offset,
        })
    },[date])

    return (
        <div>
            {timer && <ClockDisplay date={timer} title={clock.title} timezone={timezone} offset={offset} />}
            <ClockActions local={true} clock={clock}  updateClock={updateClock} createClock={createClock} />
        </div>
    );
};

export default LocalClock;