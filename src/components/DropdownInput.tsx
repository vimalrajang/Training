import React, { Component } from 'react';

class DropdownInput extends Component {
    render() {
        return (
            <div>
                <label htmlFor="dropdown">Country : </label>
                <select id='dropdown'>
                    <option value="India">India</option>
                    <option value="Other"> Other</option>
                </select>

            </div>
        );
    }
}

export default DropdownInput;