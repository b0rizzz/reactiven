import React, { Component } from 'react';
import Sidebar from '../common/Sidebar';

class Exercises extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div class="main"></div>
            </div>
        );
    }
}

export default Exercises;