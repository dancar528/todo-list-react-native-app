import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import FilterLink from './FilterLink';

const Footer = (props) => {

		const completed = props.todos.filter(todo => todo.completed).length;

		return (
			<View style={styles.container}>

				<TouchableOpacity
					onPress={props.removeTodoCompletedList}
					style={styles.counter}
				>
					<Text style={styles.buttonFont}>Clear</Text>
					<Text style={styles.buttonFont}>completed ({completed})</Text>
				</TouchableOpacity>

				<FilterLink
					selectedFilter={props.selectedFilter}
				/>

			</View>
		)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 60,
		padding: 6,
		backgroundColor: 'white',
		marginBottom: 6,
	},
	buttonFont: {
		fontSize: 15,
	},
	counter: {
		paddingLeft: 7,
	}
})

Footer.propTypes = {
	selectedFilter: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired,
	removeTodoCompletedList: PropTypes.func.isRequired,
}

export default Footer
