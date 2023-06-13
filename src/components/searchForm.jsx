import React, { Component } from 'react';

class SearchFrom extends Component {
    constructor() {
        super();
        this.state = {


        };
    }
    render() {
        return (
            <form>
                <label htmlFor="filter"></label>
                <select
                    name="filter"
                    value={this.props.value.filter}
                    onChange={this.props.onchange}>
                    <option value="first_name" >First_Name</option>
                    <option value="last_name">Last_Name</option>
                    <option value="email">Email</option>
                </select>
                <label htmlFor="searchInput">
                </label>
                <input
                    type="text"
                    placeholder="Search here"
                    name="searchInput"
                    value={this.props.value.searchInput}
                    onChange={this.props.onchange}
                />
                <button
                    type="submit"
                    className="btn btn-search"
                    onClick={(e) => { e.preventDefault(); this.props.onclick() }}
                >Search</button>
            </form>
        )
    }
}
export default SearchFrom;