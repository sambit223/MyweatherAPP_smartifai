import React from 'react';

const Carousel = ({ data, currentIndex }) => {
  if (!data.length) return null;
  const currentData = data[currentIndex];
  
  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{currentData.location.name}, {currentData.location.country}</h2>
        <p>Temperature: {currentData.current.temp_c}°C</p>
        <p>Condition: {currentData.current.condition.text}</p>
      </div>
      <img src={currentData.current.condition.icon} alt="weather icon" />
    </div>
  );
};

export default Carousel;
