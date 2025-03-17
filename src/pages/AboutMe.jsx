import React from 'react';

function AboutMe() {
  return (
    <div className="app-container">
      <nav className="top-bar">
        <div className="logo">Project Dashboard</div>
        <div className="top-bar-right">
          <button className="nav-button" onClick={() => window.history.back()}>Back</button>
        </div>
      </nav>
      
      <div className="main-content">
        <main className="content">
          <h1>About Me</h1>
          <div className="about-me-content">
            <h2>Welcome to my Project Dashboard</h2>
            <p>I am a passionate software developer dedicated to creating efficient and user-friendly applications. 
               This dashboard is a demonstration of my project management and React development skills.</p>
            
            <h3>Skills</h3>
            <ul>
              <li>React Development</li>
              <li>Frontend Architecture</li>
              <li>UI/UX Design</li>
              <li>Project Management</li>
            </ul>
            
            <h3>Contact</h3>
            <p>Feel free to reach out to me at: example@email.com</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AboutMe;