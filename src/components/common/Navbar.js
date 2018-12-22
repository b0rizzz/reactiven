import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    render() {

        return (
            <div className="header">
                <NavLink
                    activeClassName="active"
                    to="/create-word">
                    Word
                </NavLink>
                <NavLink
                    activeClassName="active"
                    to="/create-phrase">
                    Phrase
                </NavLink>
            </div>
        );
    }
}
export default Navbar;