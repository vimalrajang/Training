import React, { useState } from 'react'
import DropdownInput from './DropdownInput'
// import RadioInputs from './RadioInput'
// import TextInput from './TextInput'
import '../css/newForm.css'
import SingleInput from './SingleInput'
function Form() {
    const [successBox, setSuccessBox] = useState(true)

    const [formState, setFormState] = useState({ firstName: "", lastName: "", gender: "", country: "", languages: [] })
    const handleSubmit = () => {
        if (formState.firstName === "" || formState.lastName === "" || formState.gender === "" || formState.country === ""||formState.languages.length === 0) {
            alert("All fields are requied")
        }
        else {
            // console.log(formState,formState.languages.length)
            setSuccessBox(false)
        }
    }
    const handleBack = () => {
        setSuccessBox(true)
        setFormState({ firstName: "", lastName: "", gender: "", country: "",  languages: [] })
    }
    const handleChange = (e: any, type: string) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }))
    }
    const handleCheckboxChange = (e: any, type: string) => {
        const { name, value, checked } = e.target;
        let list: Array<string> = formState.languages
        if (checked) {
            setFormState(prev => ({ ...prev, [name]: [...prev.languages, value] }))
        }
        else {
            var index = list.indexOf(value);
            if (index > -1) {
                list.splice(index, 1);
                setFormState(prev => ({ ...prev, [name]: list }))
            }
        }
    }
    return (
        <div>
            {successBox ?
                <div>
                    <div className='formGroup'>
                        <label htmlFor="firstName">First Name : </label>
                        <SingleInput inputField="First Name" valueState={formState.firstName} stateName="firstName" inputType="text" handleChange={handleChange} />

                        {/* <TextInput value="First Name" valueState={formState.firstName} stateName="firstName" handleChange={handleChange} /> */}
                    </div>
                    <div className='formGroup'>
                        <label htmlFor="lastName">Last Name : </label>
                        <SingleInput inputField="Last Name" valueState={formState.lastName} stateName="lastName" inputType="text" handleChange={handleChange} />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='gender'>Gender : </label>
                        <SingleInput inputField="Gender" valueState="Male" handleChange={handleChange} stateName="gender" inputType="radio" /> Male
                        <SingleInput inputField="Gender" valueState="Female" handleChange={handleChange} stateName="gender" inputType="radio" /> Female

                        {/* <RadioInputs value="gender" handleChange={handleChange} /> */}
                    </div>

                    <div className='formGroup'>
                        <DropdownInput value="country" countries={["India", "Other"]} handleChange={handleChange} />
                    </div>
                    
                    <div className="formGroup">
                        <label htmlFor="">
                            Languages :
                        </label> <br />
                        <SingleInput inputField="Languages" valueState="English" handleChange={handleCheckboxChange} stateName="languages" inputType="checkbox" /> <label htmlFor="languages">English</label> <br />
                        <SingleInput inputField="Languages" valueState="Tamil" handleChange={handleCheckboxChange} stateName="languages" inputType="checkbox" /> <label htmlFor="languages">Tamil</label> <br />

                    </div>
                    <input type="submit" value="Submit" className='btn' onClick={handleSubmit} />

                    {/* <button className='btn' type='submit'   onClick={handleSubmit}>Submit</button> */}
                </div> :
                <span>
                    <h1>
                        Welcome {formState.firstName} {formState.lastName} !
                    </h1>
                    <p>gender : {formState.gender}</p>
                    <p>Country : {formState.country}</p>
                    <p>Languages : <br />
                        {formState.languages.map((p) => <span>
                            {p} <br />
                        </span>)}</p>
                    <button className='btn' onClick={handleBack}>Back</button>
                </span>
            }

        </div>
    )
}

export default Form