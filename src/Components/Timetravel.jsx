import React, { useState } from 'react';
import '../CompCSS/TimeTravel.css'; // Ensure to create this CSS file for styling
import { useNavigate } from 'react-router-dom';

const DateSlider = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const navigate = useNavigate();
  
  // Define the range for the slider (e.g., 1000 years in the past to 200 years in the future)
  const minYear = currentYear - 1000; // Starting from 1000 years ago
  const maxYear = currentYear + 200;   // Up to 200 years in the future
  const [selectedYear, setSelectedYear] = useState(currentYear); // Initialize with current year

  const handleChange = (event) => {
    setSelectedYear(event.target.value); // Update selected year based on slider
  };

  const handleTimeTravelClick = () => {
    if(selectedYear <1500)
      navigate('/Forest'); // Navigate to the '/3D' route
    else if(selectedYear >= 2050)
      navigate('/FutureChoice'); // Navigate to the '/3D' route
    else
      navigate('/City'); // Navigate to the '/3D' route
  };

  return (
    <>
      <link rel='stylesheet' href='../CompCSS/TimeTravel.css'></link>
      <div className="date-slider-container">
        <div id="date">Selected Year: {selectedYear}</div>
        <input
          type="range"
          min={minYear}
          max={maxYear}
          value={selectedYear}
          onChange={handleChange}
          className="date-slider"
        />
        <button id="date-button" onClick={handleTimeTravelClick}>Time Travel</button>
      </div>
    </>
  );
};

export default DateSlider;
