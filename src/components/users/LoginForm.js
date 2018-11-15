import React from 'react';

const LoginForm = (props) => (
    <form>
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
            <input type='submit' value="Login" onClick={props.onSave} />
    </form>
);

export default LoginForm;