import React, { Component } from 'react';
import UserItem from './userItem';
import UserAdd from './userAdd';
import './user.css'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            idCounter: 0
        };
        
        this.addUser = this.addUser.bind(this, name);
        this.delUser = this.delUser.bind(this, name);
    }
    
    addUser(self, name) {
        this.state.users.push({ 
            name: name ,
            id: ++this.state.idCounter
        });
        
        this.setState({
            users: this.state.users
        });
    }
    
    delUser(self, name) {
        var index = this.state.users.indexOf(name);
        
        delete this.state.users[index];
        this.setState({
            users: this.state.users
        });
    }
    
    render() {
        return (
            <div>
                <UserAdd users={this.state.users} addUser={this.addUser}></UserAdd>
                    <div className="user-list">
                    {
                        this.state.users.map(function(el, index) {
                            return <UserItem key={index} user={el} delUser={this.delUser}></UserItem>;
                        }, this)
                    }
                    </div>
            </div>
        )
    }
}

export default User
