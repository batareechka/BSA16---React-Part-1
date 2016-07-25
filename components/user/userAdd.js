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
        let addInput = this.refs.addInput;
        this.props.addUser(this.state.name);
        addInput.value = '';
        addInput.focus();
        this.setState( {name: ''} );

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.name === '') {
            return false;
        } else {
            return true;
        }
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
                
                <input ref="addInput" className="user-add-text control" onChange={this.handleChange} placeholder="Type name here"/>
                <button className="user-add-btn btn" type="button" onClick={this.handleAddUser}>Save user</button>
            </div>
        )
    }
}

export default UserAdd


