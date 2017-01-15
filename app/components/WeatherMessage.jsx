import React from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center">It's it {temp} in {location}</h3>
    </div>
  );
}

export default WeatherMessage;
