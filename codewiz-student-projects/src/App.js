import React, { useState } from 'react';
import Header from './Components/Header/header';
import Sidebar from './Components/Side_Bar/side_bar';
import Project from './Components/Projects/projects_card';
import ProjectDetails from './Components/ProjectDetails/project_details';
import AddProjectForm from './Components/Addprojectform/AddProjectForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [filter, setFilter] = useState('All');
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          {showSidebar && <Sidebar setFilter={setFilter} />}
          <Routes>
            <Route path="/" element={<Project filter={filter} />} />
            <Route path="/details/:id" element={<ProjectDetails setShowSidebar={setShowSidebar} />} />
            <Route path="/add-project" element={<AddProjectForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
