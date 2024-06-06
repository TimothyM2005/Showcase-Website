import React from 'react';
import { Link } from 'react-router-dom';
import './side_bar.css';

const Sidebar = ({ setFilter }) => {
  return (
    <div className="sidenav">
      <Link to="/" onClick={() => setFilter('All')}>All</Link>
      <Link to="/" onClick={() => setFilter('Robotics')}>Robotics</Link>
      <Link to="/" onClick={() => setFilter('Python')}>Python</Link>
      <Link to="/" onClick={() => setFilter('Roblox')}>Roblox</Link>
      <Link to="/" onClick={() => setFilter('Minecraft')}>Minecraft</Link>
      <Link to="/" onClick={() => setFilter('Scratch')}>Scratch</Link>
      <Link to="/" onClick={() => setFilter('Unity')}>Unity</Link>
      <Link to="/" onClick={() => setFilter('Unreal')}>Unreal</Link>
      <Link to="/" onClick={() => setFilter('Digital Arts')}>Digital Arts</Link>
    </div>
  );
};

export default Sidebar;
