import React, { useState } from 'react';
import '../AdminCSS.css';

const AdminPage = () => {
    const [selectedAirport, setSelectedAirport] = useState('');
    const [airline, setAirline] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [gate, setGate] = useState('');
    const [flightType, setFlightType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Placeholder for submission logic
        /*
        fetch('http://localhost:8080/flights', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedAirport, airline, aircraft, gate, flightType }),
        })
        .then(response => response.json())
        .then(data => {
          // Handle response
        })
        .catch(error => {
          // Handle error
        });
        */
    };

    return (
        <div className="adminPage">
            <h1 className="headerAddFlight">ADD A FLIGHT</h1>
            <div className="selectAirport">
                <div className="selectAirportContainer">
                    <h2 className="selectAirportLabel">SELECT AN AIRPORT</h2>
                    <select
                        value={selectedAirport}
                        onChange={(e) => setSelectedAirport(e.target.value)}
                        className="airportSelect"
                    >
                        <option value="">Select an airport</option>
                        {/* Map through airports here */}
                    </select>
                </div>
            </div>
            <div className="inputGroup">
                <div className="airlineInput">
                    <h2>AIRLINE</h2>
                    <input
                        type="text"
                        value={airline}
                        onChange={(e) => setAirline(e.target.value)}
                        className="airlineInput"
                    />
                </div>
                <div className="aircraftInput">
                    <h2>AIRCRAFT</h2>
                    <input
                        type="text"
                        value={aircraft}
                        onChange={(e) => setAircraft(e.target.value)}
                        className="aircraftInput"
                    />
                </div>
                <div className="gateInput">
                    <h2>GATE</h2>
                    <input
                        type="text"
                        value={gate}
                        onChange={(e) => setGate(e.target.value)}
                        className="gateInput"
                    />
                </div>
            </div>
            <div className="flightTypeSelect">
                <h2>DEPARTING/ARRIVING</h2>
                <select
                    value={flightType}
                    onChange={(e) => setFlightType(e.target.value)}
                    className="typeSelect"
                >
                    <option value="">Select Type</option>
                    <option value="departing">Departing</option>
                    <option value="arriving">Arriving</option>
                </select>
            </div>
            <button onClick={handleSubmit} className="submitFlight">Submit</button>
        </div>
    );
};

export default AdminPage;
