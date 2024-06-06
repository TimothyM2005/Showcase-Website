import React, { useEffect, useState } from 'react';
import './projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Project_Card = ({ filter }) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched projects:', data.projects);
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>Error fetching projects: {error.message}</div>;
  }

  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="projects">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((item) => (
          <Card style={{ width: '18rem' }} key={item.id}>
            <div className="Card">
              <div className="Image">
                <Card.Img className="project_image" variant="top" src={item.image} />
              </div>
              <Card.Body className="CardBody">
                <Card.Title>{item.project_Name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.coach}</Card.Text>
                <Card.Text>{item.students}</Card.Text>
              </Card.Body>
              <div className="ButtonDiv">
                <Link to={`/details/${item.id}`}>
                  <Button className="Card-Button" variant="primary">Details</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <p>No projects found</p>
      )}
    </div>
  );
};

export default Project_Card;
