import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function Dashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project Alpha",
      description: "A web application for task management",
      status: "In Progress",
      team: "Frontend Team",
      deadline: "2024-03-15"
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Mobile app for fitness tracking",
      status: "Completed",
      team: "Mobile Team",
      deadline: "2024-02-28"
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "E-commerce platform development",
      status: "Planning",
      team: "Full Stack Team",
      deadline: "2024-04-01"
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
            <li className="sidebar-item active">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
        </aside>

        <main className="content">
          <h1>Dashboard</h1>
          <div className="dashboard-overview">
            <section className="dashboard-section">
              <div className="section-header">
                <h2>Recent Projects</h2>
                <Link to="/projects" className="nav-button">View All Projects</Link>
              </div>
              <div className="projects-list">
                {projects.map(project => (
                  <div key={project.id} className="project-card">
                    <div className="project-header">
                      <h3>{project.name}</h3>
                      <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-details">
                      <span className="team">{project.team}</span>
                      <span className="deadline">Due: {project.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
