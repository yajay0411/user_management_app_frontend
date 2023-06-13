import React, { Component } from 'react';
import "../App.css";

class Add_Edit_form extends Component {
    render() {
        return (
            <>
                <div className='form-container' onClick={this.props.onclick}>
                </div>
                <form className='form'>
                    <h1>{this.props.name} FORM</h1>
                    <label htmlFor="first_name">First_Name:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        name="first_name"
                        value={this.props.value.first_name}
                        onChange={this.props.onchange}
                    />
                    <label htmlFor="last_name">Last_Name:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter last name"
                        name="last_name"
                        value={this.props.value.last_name}
                        onChange={this.props.onchange}
                    />
                    <label htmlFor="email">Email:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        value={this.props.value.email}
                        onChange={this.props.onchange}
                    />
                    <button
                        className={this.props.btn_class}
                        onClick={(e) => { e.preventDefault(); this.props.onclick(this.props.value) }}
                    >{this.props.name}</button>
                </form>
            </>

        )
    }
}
export default Add_Edit_form