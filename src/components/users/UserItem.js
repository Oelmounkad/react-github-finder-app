import React from 'react'
import {Link} from 'react-router-dom'

const UserItem = (props) =>  {

        const {login , avatar_url , html_url} = props.user;
        return (
            <div className="col-md-3 card text-center mr-2 mb-3">
                <img src={avatar_url} alt="" className="round-img card-img-top mx-auto" style={{ width: '60px'}} />
        <h3>{login}</h3>
        <div>
            <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
            </div>
        )
    
}

export default UserItem
