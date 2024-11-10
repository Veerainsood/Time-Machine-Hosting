import React, { useState } from 'react';
import styles from '../CompCSS/TimeTravel.module.css'; // Ensure this file is a CSS module
import { useNavigate } from 'react-router-dom';

const DateTimePicker = () => {
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
      navigate('/Forest'); // Navigate to the '/Forest' route
    else if(selectedYear >= 2050)
      navigate('/FutureChoice'); // Navigate to the '/FutureChoice' route
    else
      navigate('/City'); // Navigate to the '/City' route
  };

  return (
    <div className={styles.dateSliderContainer}>
      <div className={styles.date}>Selected Year: {selectedYear}</div>
      <input
        type="range"
        min={minYear}
        max={maxYear}
        value={selectedYear}
        onChange={handleChange}
        className={styles.dateSlider}
      />
      <button className={styles.dateButton} onClick={handleTimeTravelClick}>Time Travel</button>
    </div>
  );
};

export default DateTimePicker;
