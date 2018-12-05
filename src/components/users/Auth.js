class Auth {
    static authenticateUser(data) {
        let { email, _token } = data
        localStorage.setItem('_token', _token);
        localStorage.setItem('email', email);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('_token') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('_token');
    }

    static getToken() {
        return localStorage.getItem('_token');
    }
    
    static getEmail() {
        return localStorage.getItem('email');
    }
}

export default Auth;