import React from 'react';
import Card from './Card';

const MetricsView = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <Card title="Temperature" value={data.current.temp_c} unit="°C" />
      <Card title="Humidity" value={data.current.humidity} unit="%" />
      <Card title="Wind Speed" value={data.current.wind_kph} unit=" kph" />
      <Card title="Feels Like" value={data.current.feelslike_c} unit="°C" />
      <Card title="UV Index" value={data.current.uv} />
      <Card title="Pressure" value={data.current.pressure_mb} unit=" mb" />
    </div>
  );
};

export default MetricsView;
