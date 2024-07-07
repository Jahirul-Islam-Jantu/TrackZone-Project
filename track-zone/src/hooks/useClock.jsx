import {useEffect, useState} from "react";
import {addMinutes} from "date-fns";




    const TIMEZONE_OFFSET = {
        PST: -7 * 60,
        EST: -4 * 60,
        EDT: -4 * 60,
        BST: 1 * 60,
        MST: -6 *60,
}

const UseClock = ( timezone, offset = 0 ) => {
    const [localDate, setLocalDate] = useState(null)
    const [localOffset, setLocalOffset] = useState(0)
    const [utc, setUTC] = useState(null)

    useEffect(() => {
        let d = new Date();
        const lo = d.getTimezoneOffset();
        d = addMinutes(d, lo);
        setUTC(d);
        setLocalOffset(lo)
    }, []);
        useEffect(()=>{

            if (utc !== null ){
                    if(timezone){

                offset = TIMEZONE_OFFSET[timezone] ?? offset

                const newUtc = addMinutes(utc, offset)
                    setLocalDate(newUtc)
                    }else{
                        const newUtc = addMinutes(utc, -localOffset)
                        setLocalDate(newUtc)
                        // TODO: find timezone
                    }
            }

        },[utc])
    return{

        date: localDate,
        dateUTC: utc,
        offset,
        timezone,
        localOffset,
    }
};

export default UseClock;