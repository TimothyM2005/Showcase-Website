import React from 'react';
import './projects.css';
import data from './Projects.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Project_Card = ({ filter }) => {
  const filteredProjects = filter === 'All' ? data.projects : data.projects.filter(project => project.category === filter);

  return (
    <div className="projects">
      {filteredProjects.map((project, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <div className="Card">
            <div className="Image">
              <Card.Img className="project_image" variant="top" src={project.image} />
            </div>
            <Card.Body className="CardBody">
              <Card.Title>{project.project_Name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Card.Text>{project.coach}</Card.Text>
              <Card.Text>{project.students}</Card.Text>
            </Card.Body>
            <div className="ButtonDiv">
              <Link to={`/details/${project.id}`}>
                <Button className="Card-Button" variant="primary">Details</Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Project_Card;