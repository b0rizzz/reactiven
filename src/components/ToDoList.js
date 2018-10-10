import React, { Component } from 'react';
import ToDoStore from '../stores/ToDoStore';
import ToDo from "./ToDo";
import ToDoActions from '../actions/ToDoActions';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            todos: []
        };

        ToDoStore.on('change', () => {
            this.getAllTodos();
        });
    }

    componentDidMount() {
        this.getAllTodos();
    }

    getAllTodos () {
        ToDoStore
            .getAll()
            .then(todos => this.setState({ todos }));
    }
    
    createTodo(event) {
		event.preventDefault();
		ToDoActions.createTodo(this.state.title);
	}
    
    handleChange(event) {
		this.setState({
			title: event.target.value
		});
	}

    render() {
        const { todos } = this.state;
        const todoElements = todos.map(todo => (
            <ToDo key={todo.id} {...todo} />
        ));

        return (
            <div>
                <ul>{todoElements}</ul>
                <input 
                    type='text' 
                    ref='title' 
                    value={this.state.title} 
                    onChange={this.handleChange.bind(this)} />
				<button onClick={this.createTodo.bind(this)}>Add</button>
            </div>
        );
    }
}

export default ToDoList;
