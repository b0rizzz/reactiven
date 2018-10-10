import dispatcher from '../dispatcher';

const UserActions = {
    types: {
        REGISTER_USER: 'REGISTER_USER'
    },
    register(user) {
        dispatcher.dispatch({
            type: this.types.REGISTER_USER,
            user
        })
    }
};

export default UserActions;