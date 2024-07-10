/**
 * For local clock title won't be change
 * to create a new clock we have to create title, timezone and offset
 * for edit we will have title, timezone, offset
 * */ import {useState} from "react";

const ClockForm = ({values, title = true, handleClock, edit = false}) => {
     const [formValues, setFormValues] = useState({...values})
    const handleChange = (e) => {
    const {name, value} = e.target
        setFormValues ({...formValues, [name]: value})
    }
    const handleSubmit = (e) => {
         e.preventDefault()
        handleClock(formValues)

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input type="text" id="title" name="title" value={formValues.title} onChange={handleChange} disabled={!title} />
            </div>
            <div>
                <label htmlFor="timezone">Enter Timezone</label>
                <input type="text" id="timezone" name="timezone" value={formValues.timezone} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="offset">Enter Offset</label>
                <input type="number" id="offset" name="offset" value={formValues.offset/60} onChange={handleChange}/>
            </div>
            <button>{edit ? "Update" : "Create"}</button>
        </form>
    );
};

export default ClockForm;