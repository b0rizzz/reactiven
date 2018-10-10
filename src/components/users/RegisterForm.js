import React from 'react';

const RegisterForm = (props) => (
    <form>
        <label htmlFor='name'>Name</label>
        <input
            type='text'
            name='name'
            placeholder='Name'
            value={props.user.name}
            onChange={props.onChange}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <input
            type='email'
            name='email'
            placeholder='Email'
            value={props.user.email}
            onChange={props.onChange}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
            type='password'
            name='password'
            placeholder='Password'
            value={props.user.password}
            onChange={props.onChange}
        />
            <br/>
            <input type='submit' onClick={props.onSave} />
    </form>
);

export default RegisterForm;