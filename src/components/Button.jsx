import React, { Component } from 'react';
import "../App.css";


class Button extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <>
                <button
                    type={this.props.type}
                    onClick={() => { this.props.onclick(this.props.id) }}
                    className={this.props.class}>{this.props.name}</button>
            </>
        )
    }
}
export default Button;