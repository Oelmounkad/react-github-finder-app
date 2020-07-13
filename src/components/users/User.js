import React, {useEffect} from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'


const User = ({user,loading,getUser,match}) => {

        useEffect( () => {
            getUser(match.params.login)
        },[])


  

        const {name,
            avatar_url
            ,location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user

        if (loading) return <Spinner />
        return (
            <>
            <Link className="btn btn-light" to="/">Back to search</Link>
                Hireable: {' '}
        {hireable ? <i className="fas fa-check text-success" /> : 
        <i className="fas fa-times-circle text-danger" /> }
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
            </>
        )
   
}

export default User
