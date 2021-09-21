import React, { Component } from 'react';

class NavBar extends React.Component {



    render() {
        console.log(this.props);
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">NavBar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></a>
            </nav>
        );
    }
}

export default NavBar;