import React from 'react';

export const TodoListItem = (props) => {
  const { label, status, id, toggleCompleted } = props;

  const handleCheck = () => {
    toggleCompleted(id);
  }

  return (
    <li className="todo">
      <label>
        <input type="checkbox" 
          checked={ status === 'completed'}  
          onChange={handleCheck} 
        /> 
          {label}
      </label>
    </li>
  );
}

