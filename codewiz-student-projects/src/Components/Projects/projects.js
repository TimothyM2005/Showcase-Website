

/*
const Project = () => {

    const data = Data.map(Data);

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>

        
        <div className="projects">
            <img className="Picture" src="https://es.celoxis.com/cassets/img/pmc/project-management.png" alt="Girl in a jacket"></img>
            <div className="Info">
                <h2 className="Project_Name">{this.state.data.project_Name}</h2>
                <h3 className="Description">Description:</h3>
                <p className="Text"> We worked on making this website for you all to enjoy the student projects</p>
                <h3 className="Coach">Coach:</h3>
                <p className="Text">Timothy</p>
                <h3 className="Students">Students:</h3>
                <p className="Text">Mateo</p>
            </div>
        </div>
        
        );
};
export default Project;
*/
import './projects.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;