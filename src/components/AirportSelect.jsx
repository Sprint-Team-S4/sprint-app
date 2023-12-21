import React, { useState, useEffect } from 'react';
import '../App.css';

const AirportSelect = ({ onSelectAirport }) => {
    const [airports, setAirports] = useState([]);
    const [selectedAirportCode, setSelectedAirportCode] = useState('ALL');

    useEffect(() => {
        fetch('http://localhost:8080/airport')
            .then(response => response.json())
            .then(data => {
                setAirports([{ code: 'ALL', name: 'All Airports' }, ...data]);
            })
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