class Auth {
    static authenticateUser(token) {
        localStorage.setItem('_token', token);
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
}

export default Auth;