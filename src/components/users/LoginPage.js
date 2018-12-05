import React, { Component } from 'react';
import LoginForm from './LoginForm';
import userActions from '../../actions/UserActions';
import userStore from '../../stores/UserStore';
import Auth from './Auth';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: ''
            }
        };

        this.handleLogin = this.handleLogin.bind(this);

        userStore.on(
            userStore.eventTypes.USER_LOGGEDIN,
            this.handleLogin
        );
    }

    componentWillUnmount() {
        userStore.removeListener(
            userStore.eventTypes.USER_LOGGEDIN,
            this.handleLogin
        );
    }

    handleChange(event) {
        const target = event.target;
        const field = target.name;
        const value = target.value;
        const {user} = this.state;
        user[field] = value;

        this.setState({ user });
    }

    handleForm(event) {
        event.preventDefault();

        userActions.login(this.state.user);
    }

    handleLogin(data) {
        
        if(!data.error) {
            Auth.authenticateUser(data);
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div id="loginForm">
                <h1>Login</h1>
                <LoginForm
                    user={this.state.user}
                    onChange={this.handleChange.bind(this)}
                    onSave={this.handleForm.bind(this)} />
            </div>
        )
    }
    
    componentDidMount() {
        if( Auth.isUserAuthenticated() ) {
            this.props.history.push('/');
        }
    }
}

export default LoginPage;