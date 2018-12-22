import dispatcher from '../dispatcher';

const WordActions = {
    types: {
        CREATE_WORD: 'CREATE_WORD',
        CREATE_PHRASE: 'CREATE_PHRASE',
    },
    
    createWord(word) {
        dispatcher.dispatch({
            type: this.types.CREATE_WORD,
            word
        })
    },
    
    createPhrase(phrase) {
        dispatcher.dispatch({
            type: this.types.CREATE_PHRASE,
            phrase
        })
    },
};

export default WordActions;