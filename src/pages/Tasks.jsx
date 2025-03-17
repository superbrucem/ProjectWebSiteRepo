import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Project Proposal",
      priority: "High",
      deadline: "2024-02-15",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Review Code Changes",
      priority: "Medium",
      deadline: "2024-02-10",
      status: "Pending"
    },
    {
      id: 3,
      title: "Update Documentation",
      priority: "Low",
      deadline: "2024-02-20",
      status: "Completed"
    }
  ]);

  return (
    <div className="app-container">
      <nav className="top-bar">
        <div className="logo">Project Dashboard</div>
        <div className="top-bar-right">
          <button className="nav-button">Settings</button>
          <Link to="/about" className="nav-button">About Me</Link>
        </div>
      </nav>
      
      <div className="main-content">
        <aside className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="sidebar-item active">
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </aside>

        <main className="content">
          <h1>Task Management</h1>
          <div className="tasks-header">
            <button className="nav-button">Add New Task</button>
          </div>
          <div className="tasks-list">
            {tasks.map(task => (
              <div key={task.id} className="task-card">
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="task-details">
                  <p>Deadline: {task.deadline}</p>
                  <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Tasks;