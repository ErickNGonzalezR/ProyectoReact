import { TodoCounter } from './componentesReact/TodoCounter';
import { TodoSearch } from './componentesReact/TodoSearch';
import { TodoList } from './componentesReact/TodoList';
import { TodoItem } from './componentesReact/TodoItem';
import { CreateTodoButton } from './componentesReact/CreateTodo';

import React from 'react';


// Los componentes en react siempre empiezan en mayúscula
/*
  Se pueden insertar componentes dentro de otros componentes de react
  
  function App() { 
  return (
    <div className="App">
      <TodoItem />
      <TodoItem />
    </div>
  );
}
*/
const defaultTodos = [
  {text: 'Cortar cebolla',completed: true},
  {text: 'Tomar el curso de introducción de React.js',completed: false},
  {text: 'Llorar con la Llorona',completed: false},
  {text: 'LALALALALALLA LAALLAL',completed: false},
];

function App() { // Es un componente de react
  return (
    // Es igual <> </> a <React.Fragment> </React.Fragment> 

    <> 
      <TodoCounter completed={16} total={25}/> 
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
      
    </>
  );
}

export default App; // exporta por defecto 
