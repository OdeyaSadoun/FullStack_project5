import React, { useState, useEffect } from 'react';
import Server from './Server';

import ApplicationPage from './ApplicationPage';
const Todos = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      const tasks = await Server.getTodosByUserId(user.id);
      setTasks(tasks);
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  const sortTasks = (sortBy) => {
    let sortedTasks = [...tasks];

    switch (sortBy) {
      case 'id':
        sortedTasks.sort((a, b) => a.id - b.id);
        break;
      case 'name':
        sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'done':
        sortedTasks.sort((a, b) => a.completed - b.completed);
        break;
      default:
        break;
    }

    setTasks(sortedTasks);
  };

  return (
    <div><ApplicationPage></ApplicationPage>
    <div className="todos">
      <h1>Manage Your To Do List :)</h1>
      <h3>Sort by:</h3>
      <select onChange={(e) => sortTasks(e.target.value)}>
        <option value="id">ID</option>
        <option value="done">Done</option>
        <option value="name">Name</option>
      </select>
      <div id="task-container">
        {tasks.map((currentTask) => (
          <div className="task" key={currentTask.id}>
            <input type="checkbox" className="task-checkbox" defaultChecked={currentTask.completed} />
            <input type="text" className="task-name" value={currentTask.title} disabled />
            <input type="number" className="task-id" value={currentTask.id} disabled />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Todos;
