import React from 'react'

function SingleInput(props:any) {

  return (
    <React.Fragment>
      <input placeholder={props.inputField} name={props.stateName} value={props.valueState} type={props.inputType} onChange={e => props.handleChange(e, props.inputField)} className="field" id={props.inputField} />
    </React.Fragment>
  )
}

export default SingleInput