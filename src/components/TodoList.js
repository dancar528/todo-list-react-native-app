import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet } from 'react-native';
import Todo from './Todo';

const TodoList = (props) => {

		return(
      <View style={styles.container}>
				<ScrollView>
					{props.todos.map((todo, index) => (
						<Todo
							key={todo.id}
							name={todo.name}
							removeTodoItem={props.removeTodoItem}
							completed={todo.completed}
							index={index}
							updateTodoSelectedItem={props.updateTodoSelectedItem}
							setTodoEditItem={props.setTodoEditItem}
							updateTodoNameItem={props.updateTodoNameItem}
							setTodoCancelEditItem={props.setTodoCancelEditItem}
							editing={todo.editing}
						/>
					))}
				</ScrollView>
      </View>
		)
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		marginTop: 10,
		marginBottom: 10
  }
})

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	removeTodoItem: PropTypes.func.isRequired,
	updateTodoSelectedItem: PropTypes.func.isRequired,
	setTodoEditItem: PropTypes.func.isRequired,
	updateTodoNameItem: PropTypes.func.isRequired,
	setTodoCancelEditItem: PropTypes.func.isRequired
}

export default TodoList
