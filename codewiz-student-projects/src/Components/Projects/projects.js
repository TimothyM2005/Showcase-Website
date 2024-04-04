import "./projects.css"

const Project = () => {
    return (
        <div className="projects">
            <img className="Picture" src="https://es.celoxis.com/cassets/img/pmc/project-management.png" alt="Girl in a jacket"></img>
            <div className="Info">
                <h2 className="Project_Name">Project Name</h2>
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