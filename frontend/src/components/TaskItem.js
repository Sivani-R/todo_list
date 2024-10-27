import React from 'react';

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const handleCheckboxChange = () => {
    updateTask(task._id, { ...task, completed: !task.completed });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span>{task.title}</span>
      <button className="deletebutton" onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
