import React, { Component } from 'react';
import LessonsStore from '../../stores/LessonsStore';

class LessonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lessons: []
        };

        LessonsStore.on('change', () => {
            this.getAllLessons();
        });
    }

    componentDidMount() {
        this.getAllLessons();
    }

    getAllLessons () {
        LessonsStore
            .getAll()
            .then(lessons => this.setState({ lessons }));
    }

    render() {
        const { lessons } = this.state;
        const lessonsElements = lessons.map(lesson => (
            <li key={lesson.id}>{lesson.title}</li>
        ));

        return (
            <div>
                <ol>{lessonsElements}</ol>
            </div>
        );
    }
}

export default LessonsList;
