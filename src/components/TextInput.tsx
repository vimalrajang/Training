import React, { Component } from 'react';

class TextInput extends Component<{ value: string,valueState:string,handleChange:any,stateName:string}, {}> {
    
    render() {
        const { value,valueState,handleChange,stateName } = this.props;

        return (
            <div>
                <label>{value} : </label>

                <input  placeholder={value} name={stateName} value={valueState} onChange={e=>handleChange(e,value)} id="field" />
            </div>
        );
    }
}

export default TextInput;