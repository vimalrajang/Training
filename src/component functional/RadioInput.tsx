import React from 'react'

function RadioInput(props:any) {
    return (
        <div>
            <label htmlFor="gender">Gender : </label>
            <input type="radio" value="Male" name={props.value}  onChange={props.handleChange}/> Male
            <input type="radio" value="Female" name={props.value} onChange={props.handleChange}/> Female
        </div>
    )
}

export default RadioInput