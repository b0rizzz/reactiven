import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import userActions from '../../actions/UserActions';
import userStore from '../../stores/UserStore';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            }
        };

        this.handleRegistration = this.handleRegistration.bind(this);

        userStore.on(
            userStore.eventTypes.USER_REGISTERED,
            this.handleRegistration
        );
    }

    componentWillUnmount() {
        userStore.removeListener(
            userStore.eventTypes.USER_REGISTERED,
            this.handleRegistration
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

        userActions.register(this.state.user);
    }

    handleRegistration(data) {
        console.log(data);
    }

    render() {
        return (
            <div>
                <h1>Register User</h1>
                <RegisterForm
                    user={this.state.user}
                    onChange={this.handleChange.bind(this)}
                    onSave={this.handleForm.bind(this)} />
            </div>
        )
    }
}

export default RegisterPage;