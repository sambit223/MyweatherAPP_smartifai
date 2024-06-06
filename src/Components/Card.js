import React from 'react';

const Card = ({ title, value, unit }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center m-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-2xl">{value}{unit}</p>
    </div>
  );
};

export default Card;
