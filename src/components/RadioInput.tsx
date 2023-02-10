import React, { Component } from 'react';

class RadioInput extends Component {
    render() {
        return (
            <div>
                <label htmlFor="gender">Gender :</label>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
        );
    }
}

export default RadioInput