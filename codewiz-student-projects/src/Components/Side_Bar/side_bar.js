import "./side_bar.css"
import React from 'react';

// Unity unreal scratch 

const Sidebar = ({ setFilter }) => {

    const handleFilterClick = (category) => {
        setFilter(category); // Update filter state when a filter is clicked
    };

    return(
        <div class="sidenav">
            <a href="#All" onClick={() => handleFilterClick('All')}>All</a>
            <a href="#Robotics" onClick={() => handleFilterClick('Robotics')}>Robotics</a>
            <a href="#Python" onClick={() => handleFilterClick('Python')}>Python</a>
            <a href="#Roblox" onClick={() => handleFilterClick('Roblox')}>Roblox</a>
            <a href="#Minecraft" onClick={() => handleFilterClick('Minecraft')}>Minecraft</a>
            <a href="#Scratch" onClick={() => handleFilterClick('Scratch')}>Scratch</a>
            <a href="#Unity" onClick={() => handleFilterClick('Unity')}>Unity</a>
            <a href="#Unreal" onClick={() => handleFilterClick('Unreal')}>Unreal</a>
            <a href="#Digital Arts" onClick={() => handleFilterClick('Digital Arts')}>Digital Arts</a>
        </div>

        //<div className="sidenav">
        //    <a></a>
        //</div>

    )
};
export default Sidebar;