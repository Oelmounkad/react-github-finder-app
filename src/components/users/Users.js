import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {

    state = {
        users: [
            {
         id: 1,
         login : 'mojombo',
         avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
         html_url: 'https://github.com/mojombo'
            },
            {
             login: "defunkt",
             id: 2,
             avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
             html_url: "https://github.com/defunkt",
            },
            {
             login: "pjhyett",
             id: 3,
             avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
             html_url: "https://github.com/pjhyett",
            }
        ]
     
    }
    render() {
        return (
            <div className="container">
                <div className="row pt-3">
                 {this.state.users.map(user => 
                     <UserItem key={user.id} user={user} />
                 )} 
                 </div>  
            </div>
        )
    }
 
}

export default Users
