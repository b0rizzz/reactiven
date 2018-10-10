import React, { Component } from 'react';
import ToDoActions from '../actions/ToDoActions';

class ToDo extends Component {
	
	completeTodo(event) {
		event.preventDefault();
		ToDoActions.completeTodo(this.props.id);
	}
	
	render() {
		return (
			<li>
				{this.props.title} - {this.props.completed ? 'DONE' : (
					<button onClick={this.completeTodo.bind(this)}>PENDING</button>)}
			</li>);
	}
}

export default ToDo;
