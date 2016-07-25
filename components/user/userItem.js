import React, { Component } from 'react'

class UserItem extends Component {  
    constructor(props){
        super(props);
        
        this.state = {
            name: props.user.name,
            id: props.user.id
        };
        
        this.handleDelUser = this.handleDelUser.bind(this);
    }
    
    handleDelUser() {
        var user = this.props.user;
        
        this.props.delUser(user);
    }

    render() {
        return (
            <div className='user-item'>
                <span className="user-name">{this.state.name}</span>
                <span className="user-id">{this.state.id}</span>
                
                <button className="user-del-btn" onClick={this.handleDelUser}>Delete</button>
            </div>
        )
    }
}

export default UserItem


