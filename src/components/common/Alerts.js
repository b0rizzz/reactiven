import React from 'react';
import './Alerts.css';

export const Success = (props) => (
    <div className={`alert success ${props.display}`}>
        <span className="closebtn" onClick={props.closeAlert}>&times;</span>  
        {props.text}
    </div>
);

export const Danger = (props) => (
    <div className={`alert ${props.display}`}>
        <span className="closebtn" onClick={props.closeAlert}>&times;</span>  
        {props.text}
    </div>
);

export const Info = (props) => (
    <div className={`alert info ${props.display}`}>
        <span className="closebtn" onClick={props.closeAlert}>&times;</span>  
        {props.text}
    </div>
);

export const Warning = (props) => (
    <div className={`alert warning ${props.display}`}>
        <span className="closebtn" onClick={props.closeAlert}>&times;</span>  
        {props.text}
    </div>
);