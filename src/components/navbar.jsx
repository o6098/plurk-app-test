import React, { Component } from "react";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-light bg-light" style={{height: '42px'}}>
                <a href="#" className="navbar-brand">
                    Plurk
                </a>
            </nav>
        );
    }
}

export default NavBar;
