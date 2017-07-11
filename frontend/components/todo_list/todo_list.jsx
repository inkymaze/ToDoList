// import React from 'react';
// // import getAllTodos from '../../reducers/selectors';
// import TodoListItem from './todo_list_item';
// import TodoForm from './todo_form';
//
//
// class TodoList extends React.Component { //be aware of {}
//   // let titlearr = Object.keys(todos).map(title => todos[title]);
//   componentDidMount() {
//     this.props.fetchTodos();
//   }
// // todos, receiveTodo, removeTodo}
//   render () {
//     const {todos, receiveTodo, removeTodo} = this.props;
//
//     return (
//       <ul>
//         {
//           todos.map((todo) => (
//             <li key={todo.id}>
//               <TodoListItem todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo}/>
//             </li>
//           ))
//         }
//         <li>
//           <TodoForm receiveTodo={receiveTodo} />
//         </li>
//       </ul>
//     );
//   }
// }
//
// export default TodoList;
