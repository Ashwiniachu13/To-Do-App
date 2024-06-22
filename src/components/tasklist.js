// src/components/TaskList.js
import React from 'react';

import { deleteTask } from '../TaskSlice';
import { useDispatch, useSelector } from 'react-redux';


const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  if (!tasks || tasks.length === 0) {
    return <h3>No tasks available</h3>; // Handle case where tasks is undefined or empty
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div>
            <span>{task.text}</span>
            <span>{task.deadline}</span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;