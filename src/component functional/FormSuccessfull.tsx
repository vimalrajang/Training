import React from 'react'
import { Link, useParams } from 'react-router-dom'

function FormSuccessfull() {
    var formState: any = useParams().formdata
    formState = JSON.parse(formState)
    const handleBack = () => {
    }
    return (
        <div>
            <h1>
                Welcome {formState.firstName} {formState.lastName} !
            </h1>
            <p>Gender : {formState.gender}</p>
            <p>Country : {formState.country}</p>
            <p>Languages : <br />
                {formState.languages.map((p: any) => <span>
                    {p} <br />
                </span>)}</p>
            <button className='btn' onClick={handleBack}><Link to="/form" className='link btn-link'> Back</Link></button>
        </div>
    )
}

export default FormSuccessfull