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
    
    createPhrase(phrase) {
        WordData
            .createPhrase(phrase)
            .then(data => this.emit(this.eventTypes.PHRASE_CREATED, data));
    }

    handleAction(action) {
        switch (action.type) {
            case wordActions.types.CREATE_WORD: {
                this.createWord(action.word);
                break;
            }
            case wordActions.types.CREATE_PHRASE: {
                this.createPhrase(action.phrase);
                break;
            }
            default: break;
        }
    }
}

let wordStore = new WordStore();

wordStore.eventTypes = {
    WORD_CREATED: 'word_created',
    PHRASE_CREATED: 'phrase_created',
};

dispatcher.register(wordStore.handleAction.bind(wordStore));

export default wordStore;