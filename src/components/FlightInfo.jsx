import React, { useState, useEffect } from 'react';
import '../App.css';

const FlightInfo = ({ airport, flightType }) => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        if (airport && flightType) {
            const apiUrl = `http://localhost:8080/flight/${flightType}/${airport}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setFlights(Array.isArray(data) ? data : [data]);
                })
                .catch(error => console.error('Error fetching flight info:', error));
        }
    }, [airport, flightType]);

    if (flights.length === 0) {
        return <div>No flights available</div>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <div style={{ marginBottom: '10px' }}>
                <strong>Airline</strong> | <strong>Flight Number</strong> | <strong>Gate</strong> | <strong>City</strong> | <strong>Status</strong>
            </div>
            {flights.map((flight, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', border: '1px solid #ddd' }}>
                    <div>{flight.airline ? flight.airline.airlineName : 'N/A'}</div>
                    <div>{flight.flightNumber}</div>
                    <div>{flight.gate ? `${flight.gate.gateNumber} (${flight.gate.terminalNum})` : 'N/A'}</div>
                    <div>{flight.airport ? flight.airport.name.split(' International')[0] : 'N/A'}</div> {/* Splitting to get only city name */}
                    <div>{flight.flightStatus}</div>
                </div>
            ))}
        </div>
    );
};

export default FlightInfo;