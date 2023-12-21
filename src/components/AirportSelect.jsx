import React, { useState, useEffect } from 'react';
import '../App.css';

const AirportSelect = ({ onSelectAirport }) => {
    const [airports, setAirports] = useState([]);
    const [selectedAirport, setSelectedAirport] = useState('');

    // Fetch Airports
    useEffect(() => {
        fetch('http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/airport')
          .then(response => response.json())
          .then(data => setAirports(data))
          .catch(error => console.error('Error fetching airports:', error));

    }, []);

    const handleChange = (event) => {
        setSelectedAirport(event.target.value);
        onSelectAirport(event.target.value);
    };

    return (
        <select className="select-airport" value={selectedAirport} onChange={handleChange}>
            <option value="" disabled>Airports</option>
            {airports.map(airport => (
                <option key={airport.id} value={airport.id}>
                    {airport.name}
                </option>
            ))}
        </select>
    );
};

export default AirportSelect;