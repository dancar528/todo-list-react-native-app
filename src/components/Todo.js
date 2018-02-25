import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, Button, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import InputText from './InputText';
import CheckBox from 'react-native-check-box';
import removeItemIcon from '../assets/remove-item.png';

const Todo = (props) => {

	return (
			<View style={styles.container}>
				<CheckBox style={styles.child}
					isChecked={props.completed}
					onClick={() => props.updateTodoSelectedItem(props.index)}
					checkBoxColor="gray"
				/>
				<InputText style={styles.child}
					setTodoEditItem={props.setTodoEditItem}
					name={props.name}
					index={props.index}
					updateTodoNameItem={props.updateTodoNameItem}
					setTodoCancelEditItem={props.setTodoCancelEditItem}
					editing={props.editing}
				/>

				<TouchableHighlight
					onPress={(e) => { props.removeTodoItem(props.index)}}
					style={styles.removeButton}
				>
				 <Image
				 	 style={styles.image}
					 source={removeItemIcon}
				 />
			 </TouchableHighlight>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		marginBottom: 5,
		height: 60,
	},
	image: {
		height: 20,
		width: 20,
	},
	child: {
		padding: 6,
	},
	removeButton: {
		padding: 6,
		paddingRight: 15,
	}
})

Todo.propTypes = {
	name: PropTypes.string.isRequired,
	updateTodoSelectedItem: PropTypes.func.isRequired,
	setTodoEditItem: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	updateTodoNameItem: PropTypes.func.isRequired,
	setTodoCancelEditItem: PropTypes.func.isRequired,
	editing: PropTypes.bool.isRequired
}

export default Todo
