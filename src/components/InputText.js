import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export default class InputText extends Component{

  static propTypes = {
    setTodoEditItem: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    updateTodoNameItem: PropTypes.func.isRequired,
    setTodoCancelEditItem: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired
  };

  state = {
    name: this.props.name
  };

  setTodoEditItem = () => {
    this.props.setTodoEditItem(this.props.index);
  };

  handleKeyDown = (e) => {

    switch (e.key){
      case 'Enter':
        return this.props.updateTodoNameItem(this.props.index, this.state.name)
      case 'Escape':
        return  this.cancelEditing();
    }
  };

  cancelEditing = () => {

    this.setState({ name: this.props.name });
    return this.props.setTodoCancelEditItem(this.props.index);
  };

  handleOnChange = (val) => {
    this.setState({ name: val });
  };

  handleOnBlur = () => {

    return this.props.setTodoCancelEditItem(this.props.index);
  };

  render(){

      let todoName = this.state.name ? this.state.name : '(click to edit)';

      if (!this.props.editing){
        return (
          <View style={styles.container}>
            <Text
              onPress={this.setTodoEditItem}
              style={styles.textItem}
            >
              {todoName}
            </Text>
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            <TextInput style={styles.inputText}
              value={this.state.name}
              onChangeText={this.handleOnChange}
              onBlur={this.handleOnBlur}
              autoFocus={true}
            />
          </View>
        )
      }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  textItem: {
    fontSize: 16,
  },
  inputText: {
    fontSize: 16,
    height: '90%',
    paddingLeft: 7,
    paddingRight: 7,
  }
})
