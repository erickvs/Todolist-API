import { connect } from 'react-redux'
import TodoRouter from '../routes'
import {
	createAndLogInUser,
	toggleNewTodoFormDisplay, 
	saveToggleIsCompleted, 
	createNewTodo,
	deleteTodo
} from '../actions'

const mapStateToProps = state => {
	return {
		todos: state.todos,
		displayNewTodoForm: state.displayNewTodoForm
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleOnSubmitNewUserForm: values => {
			dispatch(createAndLogInUser(values))
		},
		handleToggleIsCompleted: e => {
			const todoId = e.target.dataset.todoid
			dispatch(saveToggleIsCompleted(todoId))
		},
		handleCreateNewTodo: todo => {
			dispatch(createNewTodo(todo))
		},
		toggleNewTodoFormDisplay: () => {
			dispatch(toggleNewTodoFormDisplay())
		},
		handleDeleteTodo: e => {
			const todoId = e.target.parentNode.dataset.todoid
			dispatch(deleteTodo(todoId))
		}
	}
}

const App = connect(mapStateToProps, mapDispatchToProps)(TodoRouter)
export default App