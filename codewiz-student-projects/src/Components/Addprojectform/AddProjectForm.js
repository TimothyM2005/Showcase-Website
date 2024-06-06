import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './add_project.css';

const AddProject = () => {
  const [project, setProject] = useState({
    project_Name: '',
    description: '',
    image: '',
    coach: '',
    students: '',
    category: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Project added:', data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error adding project:', error);
      });
  };

  return (
    <div className="add-project">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name:
          <input type="text" name="project_Name" value={project.project_Name} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={project.description} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={project.image} onChange={handleChange} required />
        </label>
        <label>
          Coach:
          <input type="text" name="coach" value={project.coach} onChange={handleChange} required />
        </label>
        <label>
          Students:
          <input type="text" name="students" value={project.students} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={project.category} onChange={handleChange} required />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
