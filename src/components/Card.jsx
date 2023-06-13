import React, { Component } from 'react'
import Button from './Button';

class Card extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <>
                {this.props.searchArray.map((item) => {
                    return (
                        < div className='card' key={item.id} >
                            <div>
                                <p>NAME: {item.first_name} {item.last_name}</p>
                                <p>Email: {item.email}</p>
                            </div>
                            <div className='card-btn-container'>
                                <button
                                    id={item.id}
                                    className="btn btn-edit"
                                    onClick={(e) => { e.preventDefault(); this.props.onclickEdit(item) }}
                                >Edit</button>
                                <button
                                    className="btn btn-delete"
                                    onClick={() => { this.props.onclickDelete(item.id) }}
                                >Delete</button>
                            </div>
                        </div >
                    )
                })
                }
            </>


        )
    }
}
export default Card;