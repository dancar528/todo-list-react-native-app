import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button, View, StyleSheet, Text } from 'react-native';
import CheckBox from 'react-native-check-box';

export default class Header extends Component {

	static propTypes = {
		addTodoItem: PropTypes.func.isRequired,
		todos: PropTypes.array.isRequired,
	};

	state = {
		name: '',
	}

	onNameChange = (val) => {
		this.setState({ name: val  })
	};

	onSubmitForm = (e) => {
		e.preventDefault();
		this.props.addTodoItem(this.state.name);
		this.setState({ name: '' });
	}

	render(){
		let uncompleted = this.props.todos.filter(todo => !todo.completed).length;

		return (
			<View style={styles.container}>

					<TextInput style={styles.inputName}
						value={this.state.name}
						onChangeText={this.onNameChange}
						placeholder="Add something to do"
					/>

					<View style={styles.counter}>
						<Text>{uncompleted} items left</Text>
					</View>

          <Button style={styles.addButton}
            onPress={this.onSubmitForm}
            title="Add"
						color='#841584'
          />

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 55,
		padding: 6,
		marginTop: 30,
		justifyContent: 'space-between',
		backgroundColor: 'white',
	},
	inputName: {
		flexGrow: 2,
		height: '100%',
		maxWidth: '60%',
		fontSize: 19,
		paddingLeft: 7,
		paddingRight: 7,
	},
	counter: {
		marginLeft: 7,
		marginRight: 7,
	},
})
