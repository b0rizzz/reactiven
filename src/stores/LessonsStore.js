import { EventEmitter } from 'events';
//~ import dispatcher from '../dispatcher';
import axios from 'axios';

class LessonsStore extends EventEmitter {

    getAll() {

        const uri = 'http://www.engrexapi.com/lessons';

       return axios.get(uri).then(result => result.data);
    }
}

let lessonsStore = new LessonsStore();

//~ dispatcher.register(lessonsStore.handleAction.bind(lessonsStore));

export default lessonsStore;
