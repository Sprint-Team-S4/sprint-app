import React, { useState, useEffect } from 'react';
import '../App.css';

const AirportSelect = ({ onSelectAirport }) => {
    const [airports, setAirports] = useState([]);
    const [selectedAirportCode, setSelectedAirportCode] = useState('ALL');

    // Fetch Airports
    useEffect(() => {
        fetch('http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/airport')
          .then(response => response.json())
          .then(data => setAirports(data))
          .catch(error => console.error('Error fetching airports:', error));
    }, []);

    const handleChange = (event) => {
        setSelectedAirportCode(event.target.value);
        onSelectAirport(event.target.value);
    };

    return (
        <select className="select-airport" value={selectedAirportCode} onChange={handleChange}>
            {airports.map(airport => (
                <option key={airport.code} value={airport.code}>
                    {airport.name}
                </option>
            ))}
        </select>
    );
};

export default AirportSelect;