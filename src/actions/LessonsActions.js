import dispatcher from '../dispatcher'

let LessonsActions = {
    createLesson: (title) => {
        dispatcher.dispatch({
            type: 'CREATE_LESSON',
            title
        });
    }
};

export default LessonsActions;
