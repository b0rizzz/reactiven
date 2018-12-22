import React from 'react';

const Input  = (props) => (
    <label htmlFor={props.name}>
        {props.name}
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange} 
        />
    </label>
);

export default Input;