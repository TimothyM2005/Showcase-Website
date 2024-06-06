import { Link } from 'react-router-dom';
import "./header.css"; // Import the logo image

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://codewizfranchise.com/wp-content/uploads/2023/02/codewiz_logo.png" alt="Code Wiz Logo" className="logo" /> {/* Insert the logo */}
      </div>
      <div className='text-container'>
        <h1>Code Wiz Durham Student Projects</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/add-project">Add Project</Link> {/* Link to the add project form */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
