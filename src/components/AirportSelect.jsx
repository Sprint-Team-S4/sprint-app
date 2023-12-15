import React, { useState, useEffect } from 'react';

const AirportSelect = ({ onSelectAirport }) => {
    const [airports, setAirports] = useState([]);
    const [selectedAirport, setSelectedAirport] = useState('');

    // Fetch airports from the Spring Boot application
    useEffect(() => {
        // Uncomment and modify the URL to match your API endpoint
        /*
        fetch('http://localhost:8080/api/airports') // Adjust the URL as needed
          .then(response => response.json())
          .then(data => setAirports(data))
          .catch(error => console.error('Error fetching airports:', error));
        */
    }, []);

    const handleChange = (event) => {
        setSelectedAirport(event.target.value);
        onSelectAirport(event.target.value);
    };

    return (
        <select value={selectedAirport} onChange={handleChange}>
            <option value="" disabled>Select an airport</option>
            {airports.map(airport => (
                <option key={airport.id} value={airport.id}>
                    {airport.name}
                </option>
            ))}
        </select>
    );
};

export default AirportSelect;