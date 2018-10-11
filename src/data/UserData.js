const baseUrl = 'http://www.engrexapi.com';

class UserData {

    static register(user) {

        return window.fetch(`${baseUrl}/register`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(result => result.json());
    }
}

export default UserData;