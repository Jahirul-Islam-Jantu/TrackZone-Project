/**
 * For local clock title won't be change
 * to create a new clock we have to create title, timezone and offset
 * for edit we will have title, timezone, offset
 * */
import React, {useEffect, useState} from "react";
import {getOffset} from "../../../utils/timezone.js";
import {TIMEZONE_OFFSET} from "../../../constants/timezone.js";

const ClockForm = ({values = {title: '', timezone: 'UTC', offset: 0}, title = true, handleClock, edit = false}) => {
     const [formValues, setFormValues] = useState({...values})
    const handleChange = (e) => {
    let {name, value} = e.target;

    if(name === 'offset'){
        value = Number(value)*60;
    }
    setFormValues((prev)=>({
        ...prev,
        [name]: value
    }))
}
    const handleSubmit = (e) => {
         e.preventDefault()
        handleClock(formValues)

    }
    useEffect(() => {
            if(TIMEZONE_OFFSET[formValues.timezone]){
                setFormValues((prev)=> ({
                ...prev,
                    offset: TIMEZONE_OFFSET[formValues.timezone]
                }))
            }

    }, [formValues.timezone]);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" id="title" name="title" value={formValues.title} onChange={handleChange}
                       disabled={!title}/>
            </div>
            <div>
                <label htmlFor="timezone">Enter Timezone</label>
                <select id="timezone" name="timezone" value={formValues.timezone} onChange={handleChange}>
                     <option value="GMT">GMT</option>
                     <option value="PST">PST</option>
                     <option value="EST">EST</option>
                     <option value="EDT">EDT</option>
                     <option value="BST">BST</option>
                     <option value="UTC">UTC</option>
                     <option value="MST">MST</option>
                     </select>
            </div>
            {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
                <div>
                    <label htmlFor="offset">Enter Offset</label>
                    <select
                        id="offset" name="offset" value={formValues.offset / 60} onChange={handleChange}>
                        {getOffset().map((offset) => (<option value={offset} key={offset}> {offset} </option>))}
                    </select>
                </div>
            )}

    <button>{edit ? "Update" : "Create"}</button>
</form>
)
    ;
};

export default ClockForm;