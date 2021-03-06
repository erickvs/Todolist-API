import React from 'react'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			newTodoValue: ''
		}
		this.handleUpdateNewTodoValue = this.handleUpdateNewTodoValue.bind(this)
		this.createNewTodo = this.createNewTodo.bind(this)
	}
	
	handleUpdateNewTodoValue(e) {
		this.setState({newTodoValue: e.target.value})
	}

	createNewTodo(e) {
		const newTodoValue = this.state.newTodoValue
		this.setState({newTodoValue: ''})
		this.props.toggleNewTodoFormDisplay()
		if (newTodoValue) this.props.handleCreateNewTodo(newTodoValue)
		e.preventDefault()
	}

	render() {
		const props = this.props
		const todos = []
		for (var todoId in props.todos) {
			const todo = props.todos[todoId]
			todos.push(
				<Todo 
					toggleIsCompleted={props.handleToggleIsCompleted} 
					key={todoId}
					todoId={todoId}
					todo={todo.todo} 
					completed={todo.isCompleted} 
					deleteTodo={props.handleDeleteTodo}
				/>
			)
		}

		const newTodoInput = (
			<li>
				<form onSubmit={this.createNewTodo}>
					<label>
						<input 
							placeholder="Enter TODO"
							className="form-control"
							type="text" 
							value={this.state.newTodoValue} 
							onChange={this.handleUpdateNewTodoValue}/>
					</label>
				</form>
			</li>
		)

		return(
			<div className='container-fluid'>
				<header>
				<ul className="menu">
					<li><h1>{`${this.props.user}'s TODOs`}</h1></li>
					<li className="menu" onClick={props.toggleNewTodoFormDisplay}>
						<h1>+</h1>
					</li>
				</ul>
				</header>
				<ul className='todoList'>
					{ props.displayNewTodoForm && newTodoInput}
					{ todos.reverse() }
				</ul>
			</div>
		)
	}
}
export default TodoList