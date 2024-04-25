import './projects.css'
import data from "./Projects.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project_Card = ({image, project_Name, description, coach, students}) =>{
  return (
    <div className = "projects">
      {data.projects.map((item) => (
      <Card style={{ width: '18rem' }}>
        <div className = "Card">
          <div className="Image">
            <Card.Img className = "project_image" variant="top" src={item.image} />
          </div>
          <Card.Body className = "CardBody">
            <Card.Title>{item.project_Name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.coach}</Card.Text>
            <Card.Text>{item.students}</Card.Text>
          </Card.Body>
          <div className="ButtonDiv">
            <Button className = "Card-Button" variant="primary">Details</Button>
          </div>
        </div>
      </Card>
      ))};
    </div>  
  );
}

export default Project_Card;