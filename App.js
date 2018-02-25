import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './src/reducers/todos';
import Todos from './src/containers/Todos';
import { Router, Scene } from 'react-native-router-flux';

const store = createStore(
  todosReducer
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  }
}
