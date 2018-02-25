import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';

const FilterLink = (props) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.btn}
        onPress={() => props.selectedFilter('ALL')}
			>
				<Text style={styles.buttonFont}>All</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn}
        onPress={() => props.selectedFilter('PENDING')}
			>
				<Text style={styles.buttonFont}>Active</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn}
        onPress={() => props.selectedFilter('COMPLETED')}
			>
				<Text style={styles.buttonFont}>Completed</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	btn: {
		alignItems: 'center',
		padding: 7,
		paddingLeft: 10,
	},
	buttonFont: {
		fontSize: 17,
		padding: 3,
	}
})

FilterLink.propTypes = {
	selectedFilter: PropTypes.func.isRequired
}

export default FilterLink
