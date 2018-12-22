import { url } from '../helpers';

const baseUrl = url();

class WordData {

    static createWord(word) {

        return window.fetch(`${baseUrl}/words/store`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(word),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(result => result.json());
    }

    static createPhrase(phrase) {

        return window.fetch(`${baseUrl}/phrases/store`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(phrase),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(result => result.json());
    } 
}

export default WordData;