import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    handleClick = event => {
        if (/\/lessons/.test(window.location.href)) {
            event.preventDefault();
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    };

    render() {

        return (
            <div className="header">
                <Link
                    className="active"
                    to="/"
                    onClick={this.handleClick}>
                    Lessons
                </Link>
            </div>
        );
    }
}
export default Navbar;