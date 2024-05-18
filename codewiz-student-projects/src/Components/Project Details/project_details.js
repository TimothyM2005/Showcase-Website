import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../Projects/Projects.json';
import './project_details.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = data.projects.find(p => p.id.toString() === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details-container">
      <div className="project-details-header">
        <h1>{project.project_Name}</h1>
        <button onClick={() => navigate(-1)}>Back</button> {/* Back button */}
      </div>
      <div className="project-details-content">
        <img src={project.image} alt={project.project_Name} />
        <p>{project.description}</p>
        <p className="coach">Coach: {project.coach}</p>
        <p className="students">Students: {project.students}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
