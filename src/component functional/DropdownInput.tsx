import React from 'react'
import '../css/dropdown.css'
function DropdownInput(props:any) {
    const options:Array<any> = []
    props.countries.forEach((c:string)=>{options.push(<option key={c} value={c}>{c}</option>)})
    return (
        <div>
            <label htmlFor="dropdown" >Country : </label>
            <select className='dropdown' name={props.value} onChange={props.handleChange} id='dropdown'>
                <option value=""  defaultValue="Select">Select</option>
                
                {options}
                
            </select>
        </div>
    )
}

export default DropdownInput