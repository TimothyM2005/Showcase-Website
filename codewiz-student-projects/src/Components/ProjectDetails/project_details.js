import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './project_details.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`)
      .then(response => response.json())
      .then(data => setProject(data))
      .catch(error => console.error('Error fetching project details:', error));
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-details">
      <h2>{project.project_Name}</h2>
      <img src={project.image} alt={project.project_Name} />
      <p>{project.description}</p>
      <p>Coach: {project.coach}</p>
      <p>Students: {project.students}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
