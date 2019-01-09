import React from 'react';

const InputNumber  = (props) => {
    let value = props.value;
        
    if (value !== '') {
        let level = parseInt(value);
        
        if ( level <= 5 && level > 0) {
            
        }
            
    }
    
    return (<label htmlFor={props.name}>
                {props.name}
                <input
                    type='number'
                    name={props.name}
                    value={value}
                    onChange={props.onChange} 
                />
            </label>);
};

export default InputNumber;