import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) => {

        return (
            <nav className="navbar bg-light">
                <h3>
                    <i className={props.icon} />&nbsp; {props.title}
                </h3>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
    }

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default Navbar;
