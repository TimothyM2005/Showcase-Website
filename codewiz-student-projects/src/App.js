import Header from './Components/Header/header';
import Sidebar from './Components/Side_Bar/side_bar';
import Project from './Components/Projects/projects';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Project />
      <Project />
    </div>
  );
}

export default App;
