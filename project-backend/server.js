const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Endpoint to get all projects
app.get('/projects', (req, res) => {
  fs.readFile('Projects.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading projects:', err);
      res.status(500).send('Error reading projects');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

// Endpoint to add a new project
app.post('/projects', (req, res) => {
  fs.readFile('Projects.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading projects:', err);
      res.status(500).send('Error reading projects');
    } else {
      const projects = JSON.parse(data);
      const newProject = {
        id: projects.projects.length + 1,
        ...req.body,
      };
      projects.projects.push(newProject);
      fs.writeFile('Projects.json', JSON.stringify(projects, null, 2), (err) => {
        if (err) {
          console.error('Error writing projects:', err);
          res.status(500).send('Error writing projects');
        } else {
          res.status(201).send(newProject);
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
