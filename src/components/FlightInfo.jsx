import React from 'react';
import '../App.css';

const FlightInfo = ({ airport, flightType }) => {
    // Placeholder for flight data
    const flightData = {
        aircraft: 'Boeing 737',
        airline: 'Example Airline',
        gate: 'A1',
        city: 'New York',
        status: flightType // 'arriving' or 'departing'
    };

    // Fetch flight data based on airport and flightType
    // useEffect(() => {
    //   fetch(`http://your-api/flight-info?airport=${airport}&type=${flightType}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       // Set flight data
    //     })
    //     .catch(error => console.error('Error fetching flight info:', error));
    // }, [airport, flightType]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', border: '1px solid #ddd' }}>
            <div><strong>Aircraft:</strong> {flightData.aircraft}</div>
            <div><strong>Airline:</strong> {flightData.airline}</div>
            <div><strong>Gate:</strong> {flightData.gate}</div>
            <div><strong>City:</strong> {flightData.city}</div>
            <div><strong>Status:</strong> {flightData.status.charAt(0).toUpperCase() + flightData.status.slice(1)}</div>
        </div>
    );
};

export default FlightInfo;