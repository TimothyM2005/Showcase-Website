import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Sidebar from './Components/Side_Bar/side_bar';
import Project from './Components/Projects/projects_card';
import ProjectDetails from './Components/Project Details/project_details';
import './App.css';

const AppContent = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  return (
    <div>
      <Header />
      {location.pathname === '/' && <Sidebar setFilter={setFilter} />}
      <main className="content">
        <Routes>
          <Route path="/" element={<Project filter={filter} />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
