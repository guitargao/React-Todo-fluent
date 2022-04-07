import React from 'react';
import { TodoHeader } from './components/TodoHeader.tsx';
import { TodoList } from './components/TodoList.tsx';
import { TodoFooter } from './components/TodoFooter.tsx';

const defaultTodos = [
  {
    id: '01',
    label: 'Todo 1',
    status: 'completed',
  },
  {
    id: '02',
    label: 'Todo 2',
    status: 'active',
  },  
  {
    id: '03',
    label: 'Todo 2',
    status: 'active',
  },  
  {
    id: '04',
    label: 'Todo 3',
    status: 'completed',
  },
]

export const TodoApp = props => {
  const [filter, setFilter] = React.useState('all');
  const [todos, setTodos] = React.useState(defaultTodos);

  const addTodo = (label) => {
    const getId = () => Date.now().toString();
    const newTodo = {
      id: getId(),
      label: label,
      status: 'active',
    };
    setTodos([...todos, newTodo]);
  }

  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo)=>{
      if (todo.id === id){
        return {...todo, status: todo.status === 'active' ? 'completed' : 'active'};
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  const clearCompleted = () => {
    const updateTodos = todos.map((todo) => {
      if(todo.status === 'completed') {
        return {...todo, status: 'cleared'};
      } else {
        return todo;
      }
    });

    setTodos(updateTodos);
  }

  return (
    <div>
      <TodoHeader filter={filter} setFilter={setFilter} addTodo={addTodo} />
      <TodoList todos={todos} filter={filter} toggleCompleted={toggleCompleted} />
      <TodoFooter todos={todos} clearCompleted={clearCompleted} />
    </div>
  )
}

