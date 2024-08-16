import { TodoCounter } from './componentesReact/TodoCounter';
import { TodoSearch } from './componentesReact/TodoSearch';
import { TodoList } from './componentesReact/TodoList';

import './App.css';
import { TodoItem } from './componentesReact/TodoItem';
import { CreateTodoButton } from './componentesReact/CreateTodo';

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
function App() { // Es un componente de react
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton/>
      
    </div>
  );
}

export default App; // exporta por defecto 
