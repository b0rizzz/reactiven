import React from 'react';
import './Alert.css';

export const Alert = (props) => (
    <div className={`alert ${props.type} ${props.display}`}>
        <span className="closebtn" onClick={props.closeAlert}>&times;</span>  
        {props.text}
    </div>
);