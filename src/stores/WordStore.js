import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import wordActions from '../actions/WordActions';
import WordData from '../data/WordData';

class WordStore extends EventEmitter {
    createWord(word) {
        WordData
            .createWord(word)
            .then(data => this.emit(this.eventTypes.WORD_CREATED, data));
    }
    
    //~ login(user) {
        //~ UserData
            //~ .login(user)
            //~ .then(data => this.emit(this.eventTypes.USER_LOGGEDIN, data));
    //~ }

    handleAction(action) {
        switch (action.type) {
            case wordActions.types.CREATE_WORD: {
                this.createWord(action.word);
                break;
            }
            //~ case userActions.types.LOGIN_USER: {
                //~ this.login(action.user);
                //~ break;
            //~ }
            default: break;
        }
    }
}

let wordStore = new WordStore();

wordStore.eventTypes = {
    WORD_CREATED: 'word_created',
    //~ USER_LOGGEDIN: 'user_loggedin'
};

dispatcher.register(wordStore.handleAction.bind(wordStore));

export default wordStore;