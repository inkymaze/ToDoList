import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {getAllTodos} from './reducers/selectors';
import {fetchTodos,createTodo} from './actions/todo_actions';
import Root from './components/root';
import App from './components/app';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.getAllTodos = getAllTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
