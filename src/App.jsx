import React, { Component } from 'react';
import "./App.css";
import Button from './components/Button.jsx';
import SearchFrom from './components/searchForm.jsx';
import Card from './components/Card.jsx';
import Add_Edit_form from './components/Add_Edit_form.jsx';
import { getUserData, postUserData, deleteSelectedUserData, editSelectedUserData } from "./api.js"

class App extends Component {
    constructor() {
        super();
        this.state = {
            recordArray: [],
            searchArray: [],
            search: {
                searchInput: "",
                filter: "first_name"
            },
            searchInput: "",
            filter: "first_name",
            addForm: false,
            editForm: false,
            formData: {
                id: "",
                first_name: "",
                last_name: "",
                email: ""
            }
        };
    }
    //search functonality and searchInput state 
    searchFunctionality = () => {
        const filter = this.state.search.filter;
        const searchInput = this.state.search.searchInput;
        const array = Object.assign([], this.state.recordArray);
        if (searchInput === null || searchInput === "") {
            this.setState((prevState) => ({ ...prevState, searchArray: array }))
        } else {
            const filterArray = array.filter((item) => {
                if (filter === "first_name") {
                    return item.first_name.toLowerCase().startsWith(searchInput);
                } else if (filter === "last_name") {
                    return item.last_name.toLowerCase().startsWith(searchInput);
                } else if (filter === "email") {
                    return item.email.toLowerCase().startsWith(searchInput);
                }
            })
            this.setState((prevState) => ({ ...prevState, searchArray: filterArray }));
        }
    }
    //handle change for search bar
    onChangeSearch = (e) => {
        const { name, value } = e.target;
        let data = this.state.search;
        data[name] = value.toLowerCase();
        this.setState((prevState) => ({ ...prevState, search: data }))
    }

    //handle change for add-edit forms
    add_edit_form_onchange = (e) => {
        const { name, value } = e.target;
        const data = this.state.formData;
        data[name] = value;
        this.setState((prevState) => ({ ...prevState, formData: data }))
    };

    //get data from database
    getData = () => {
        getUserData().then((res) => {
            this.setState((prevState) => ({ ...prevState, searchArray: res.data, recordArray: res.data }));
        }).catch((err) => {
            return console.log(err.message);
        })
    }
    //add form flag 
    add_form = () => {
        const data = {
            first_name: "",
            last_name: "",
            email: ""
        }
        this.setState((prevState) => ({ ...prevState, addForm: !prevState.addForm, formData: data }))
    };
    //edit form flag
    edit_form = (data) => {
        return this.setState((prevState) => ({ ...prevState, editForm: !prevState.editForm, formData: data }))
    };
    //add new user
    addUserData = (formData) => {
        postUserData(formData).then(() => { return this.getData() }).catch();
        this.add_form();
    };
    //update user
    editUserData = (formData) => {
        const userID = formData.id;
        const data = formData;
        editSelectedUserData(userID, data).then(() => { return this.getData() }).catch();
        this.edit_form();
    }
    //delete data from database
    deleteUserData = (id) => {
        deleteSelectedUserData(id).then(() => { return this.getData() }).catch(err => console.log(err));
    };
    //lifecyle methods
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="app">
                <div className='top-display'>
                    <div className='top-div'>
                        <h1 className='logo'>User Management</h1>
                    </div>
                    <div className='top-div'>
                        <SearchFrom
                            value={this.state.search}
                            onclick={this.searchFunctionality}
                            onchange={this.onChangeSearch} />
                    </div>
                    <div className='top-div'>
                        <Button
                            type="submit"
                            class="btn btn-add"
                            name="Add User"
                            onclick={this.add_form} />
                    </div>
                </div>
                <div className='main-display'>
                    {this.state.addForm &&
                        (
                            <Add_Edit_form
                                name="ADD"
                                onclick={this.addUserData}
                                btn_class="form-btn btn-add"
                                value={this.state.formData}
                                onchange={this.add_edit_form_onchange} />
                        )
                    }
                    {this.state.editForm &&
                        (
                            <Add_Edit_form
                                name="EDIT"
                                onclick={this.editUserData}
                                btn_class="form-btn btn-edit"
                                value={this.state.formData}
                                onchange={this.add_edit_form_onchange} />
                        )
                    }
                    <div className='card-display'>
                        <Card
                            searchArray={this.state.searchArray}
                            value={this.state.formData}
                            onclickDelete={this.deleteUserData}
                            onclickEdit={this.edit_form} />
                    </div>
                </div>
            </div >
        )
    }
}
export default App;