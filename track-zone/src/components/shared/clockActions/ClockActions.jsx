import React, {useState} from 'react';
import ClockForm from "../clockForm/ClockForm.jsx";

const defaultOffset = [
    -11.5,
    -11,
    -10.5,
    -10,
    -9.5,
    -9,
    0, 1, 2, 3, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 9
]

const ClockActions = ({local = false, clock, updateClock, createClock}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isCreate, setIsCreate] = useState(false);

const handleClock = (values) => {
    createClock(values)
}

    return (
        <div>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            {local ? <button onClick={()=>setIsCreate(!isCreate)}>Create</button> : <button>Delete</button>}
            {isEdit && (
                <>
                    <h3>Edit Clock</h3>
                    <ClockForm values={clock} handleClock={updateClock} title={!local} edit={true}/>
                </>
                    )}
            {isCreate && (
            <>
                <h3>Create Clock</h3>
                <ClockForm  handleClock={handleClock} />
            </>
            )}
        </div>
    );
};

export default ClockActions;



// const handleChange = (e) => {
//     let {name, value} = e.target;
//
//     if(name === 'offset'){
//         value = Number(value)*60;
//     }
//     updateClock({
//     [name]: value
//     })
// }



// <div>
//     <input type="text" name='title' value={clock.title} onChange={handleChange}/>
//     <select name="timezone" value={clock.timezone} onChange={handleChange}>
//         <option value="GMT">GMT</option>
//         <option value="PST">PST</option>
//         <option value="EST">EST</option>
//         <option value="EDT">EDT</option>
//         <option value="BST">BST</option>
//         <option value="UTC">UTC</option>
//         <option value="MST">MST</option>
//     </select>
    // {(clock.timezone === "GMT" || clock.timezone === "UTC") && (
    //     <select name="offset" value={clock.offset / 60} onChange={handleChange}>
    //         {defaultOffset.map((offset) => (<option value={offset} key={offset}> {offset} </option>))}
    //     </select>)}
//
// </div>