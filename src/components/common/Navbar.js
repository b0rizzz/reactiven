import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/users/register'>Register</Link>
        <Link to='/users/login'>Login</Link>
    </div>
);

export default Navbar;