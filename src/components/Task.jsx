import React from 'react';

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;