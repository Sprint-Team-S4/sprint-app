import React, { useState, useEffect } from 'react';
import '../App.css';

const AirportSelect = ({ onSelectAirport }) => {
    const [airports, setAirports] = useState([]);
    const [selectedAirportCode, setSelectedAirportCode] = useState('');


    useEffect(() => {
        fetch('http://localhost:8080/airport')
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
            <option value="" disabled>Select Airport</option>
            {airports.map(airport => (
                <option key={airport.id} value={airport.code}>
                    {airport.name} ({airport.code})
                </option>
            ))}
        </select>
    );
};

export default AirportSelect;