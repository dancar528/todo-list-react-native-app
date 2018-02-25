import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View } from 'react-native';
import TodoList from '../components/TodoList';
import * as TodoActions from '../actions/todos';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Todos extends Component {

  setFilter = (todos, filter) => {
    switch (filter){
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed)
      case 'PENDING':
        return todos.filter((todo) => !todo.completed)
      case 'ALL':
      default:
        return todos
    }
  }

  render(){

    const addTodoItem = bindActionCreators(TodoActions.addTodoItem, this.props.dispatch);
    const removeTodoItem = bindActionCreators(TodoActions.removeTodoItem, this.props.dispatch);
    const selectedFilter = bindActionCreators(TodoActions.selectFilter, this.props.dispatch);
    const toggleTodoList = bindActionCreators(TodoActions.toggleTodoList, this.props.dispatch);
    const updateTodoSelectedItem = bindActionCreators(TodoActions.updateTodoSelectedItem, this.props.dispatch);
    const updateTodoNameItem = bindActionCreators(TodoActions.updateTodoNameItem, this.props.dispatch);
    const removeTodoCompletedList = bindActionCreators(TodoActions.removeTodoCompletedList, this.props.dispatch);
    const setTodoEditItem = bindActionCreators(TodoActions.setTodoEditItem, this.props.dispatch);
    const setTodoCancelEditItem = bindActionCreators(TodoActions.setTodoCancelEditItem, this.props.dispatch);

    return (
      <View style={styles.container}>

          <Header
            addTodoItem={addTodoItem}
            toggleTodoList={toggleTodoList}
            todos={this.props.todos}
          />

          <TodoList
            todos={this.setFilter(this.props.todos, this.props.filter)}
            removeTodoItem={removeTodoItem}
            updateTodoSelectedItem={updateTodoSelectedItem}
            setTodoEditItem={setTodoEditItem}
            updateTodoNameItem={updateTodoNameItem}
            setTodoCancelEditItem={setTodoCancelEditItem}
            />

          <Footer
            selectedFilter={selectedFilter}
            todos={this.props.todos}
            removeTodoCompletedList={removeTodoCompletedList}
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingLeft: 5,
		paddingRight: 5,
    flex: 1,
    backgroundColor: '#eee',
  },

})

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.selectedFilter
  }

}

export default connect(mapStateToProps)(Todos)
