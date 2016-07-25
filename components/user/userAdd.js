import React, { Component } from 'react'

class UserAdd extends Component {  
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }

        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleAddUser() {
        this.props.addUser(this.state.name);
    }
    
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div className="user-add">
                <h2 className="user-header">Add user</h2>
                
                <input className="user-add-text control" onChange={this.handleChange} placeholder="Type name here"/>
                <button className="user-add-btn btn" type="button" onClick={this.handleAddUser}>Save user</button>
            </div>
        )
    }
}

export default UserAdd


