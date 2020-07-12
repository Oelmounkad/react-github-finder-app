import React from 'react'

const UserItem = (props) =>  {

        const {login , avatar_url , html_url} = props.user;
        return (
            <div className="col-md-3 card text-center mr-2 mb-3">
                <img src={avatar_url} alt="" className="round-img card-img-top mx-auto" style={{ width: '60px'}} />
        <h3>{login}</h3>
        <div>
            <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
            </div>
        )
    
}

export default UserItem
