import React from 'react'

function TextInput(props: any) {
  // const [value,stateName,valueState,handleChange] = props;
  return (
    <div>
      <label>{props.value} : </label>
      <input placeholder={props.value} name={props.stateName} value={props.valueState}  onChange={e => props.handleChange(e, props.value)} className="field" />
    </div>
  )
}

export default TextInput