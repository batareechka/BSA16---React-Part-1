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
                <input onChange={this.handleChange} placeholder="Type name here"/>
                <button type="button" onClick={this.handleAddUser}>Save user</button>
            </div>
        )
    }
}

export default UserAdd


