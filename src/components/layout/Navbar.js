import React from 'react'

const Navbar = (props) => {

        return (
            <nav className="navbar bg-primary">
                <h3>
                    <i className={props.icon} />&nbsp; {props.title}
                </h3>

            </nav>
        )
    }

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default Navbar;
