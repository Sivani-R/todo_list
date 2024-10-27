import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, updateTask }) => (
  <div>
    {tasks.map(task => (
      <TaskItem key={task._id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
    ))}
  </div>
);

export default TaskList;
