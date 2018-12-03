import dispatcher from '../dispatcher';

const WordActions = {
    types: {
        CREATE_WORD: 'CREATE_WORD',
        //~ LOGIN_USER: 'LOGIN_USER'
    },
    createWord(word) {
        dispatcher.dispatch({
            type: this.types.CREATE_WORD,
            word
        })
    },
    //~ login(user) {
        //~ dispatcher.dispatch({
            //~ type: this.types.LOGIN_USER,
            //~ user
        //~ })
    //~ }
};

export default WordActions;