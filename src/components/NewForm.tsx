import React from 'react';
import DropdownInput from './DropdownInput';
import RadioInput from './RadioInput';
import TextInput from './TextInput';
import '../css/newForm.css'
class NewForm extends React.Component<{}, { FirstName: string, LastName: string, SuccessBox: boolean }>  {
    constructor(props: any) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            SuccessBox: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
    }
    handleSubmit() {
        this.setState({ SuccessBox: false })
    }
    handleFirstNameChange(event:any){
        this.setState({FirstName:event.target.value})
    }
    handleLastNameChange(event:any){
        this.setState({LastName:event.target.value})
    }
    handleBack() {
        this.setState({ SuccessBox: true })
    }
    render() {
        return (
            <div>
                {this.state.SuccessBox ?
                    <div>
                        <div className='formGroup'>
                            <TextInput stateName='firstName' value="First Name" valueState={this.state.FirstName} handleChange={this.handleFirstNameChange}/>
                        </div>
                        <div className='formGroup'>
                            <TextInput stateName='lastName' value="Last Name" valueState={this.state.LastName} handleChange={this.handleLastNameChange}/>
                        </div>
                        <div className='formGroup'>
                            <RadioInput />
                        </div>
                        <div className='formGroup'>
                            <DropdownInput />
                        </div>
                        <button className='btn' onClick={this.handleSubmit}>Submit</button>
                    </div> :
                    <span>
                        <h1>
                            SuccessFully Submitted
                        </h1>
                        <button className='btn' onClick={this.handleBack}>Back</button>
                    </span>
                }

            </div>
        );
    }
}

export default NewForm;