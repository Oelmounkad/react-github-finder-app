import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'


export class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
    render() {
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
        } = this.props.user
        const {loading} = this.props

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
}

export default User
