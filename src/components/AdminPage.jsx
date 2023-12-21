import React, {useEffect, useState} from 'react';
import '../AdminCSS.css';

const AdminPage = () => {
    const [selectedAirport, setSelectedAirport] = useState('');
    const [airline, setAirline] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [gate, setGate] = useState('');
    const [flightType, setFlightType] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [airports, setAirports] = useState([]);
    const [gates, setGates] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const flightData = {
            flightStatus: flightType, // "Arriving" or "Departing"
            flightNumber: flightNumber,
            airport: { id: selectedAirport }, // Assuming selectedAirport is the ID of the airport
            gate: { id: gate }, // Assuming gate is the ID of the gate
            aircraft: { id: aircraft }, // Assuming aircraft is the ID of the aircraft
            airline: { id: airline }, // Assuming airline is the ID of the airline
            // passengers: [] // You might handle passengers differently
        };

        fetch('http://localhost:8080/flight/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(flightData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetch('http://localhost:8080/airport')
            .then(response => response.json())
            .then(data => setAirports(data))
            .catch(error => console.error('Error fetching airports:', error));
    }, []);

    useEffect(() => {
        if (selectedAirport) {
            fetch(`http://localhost:8080/airport/${selectedAirport}/gates`) // Replace with your actual API endpoint
                .then(response => response.json())
                .then(data => {
                    // Check if the data has the _embedded.gate structure
                    if (data._embedded && data._embedded.gate) {
                        setGates(data._embedded.gate);
                    } else {
                        setGates([]); // Set to an empty array if the structure is not as expected
                    }
                })
                .catch(error => {
                    console.error('Error fetching gates:', error);
                    setGates([]); // Set to an empty array in case of an error
                });
        } else {
            setGates([]); // Reset gates when no airport is selected
        }
    }, [selectedAirport]);

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
                        {airports.map(airport => (
                            <option key={airport.id} value={airport.id}>{airport.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="inputGroup">
                <div className="flightNumberInput">
                    <h2>FLIGHT NUMBER</h2>
                    <input
                        type="text"
                        value={flightNumber}
                        onChange={(e) => setFlightNumber(e.target.value)}
                    />
                </div>
                <div className="airlineInput">
                    <h2>AIRLINE</h2>
                    <input
                        type="text"
                        value={airline}
                        onChange={(e) => setAirline(e.target.value)}
                    />
                </div>
                <div className="aircraftInput">
                    <h2>AIRCRAFT</h2>
                    <input
                        type="text"
                        value={aircraft}
                        onChange={(e) => setAircraft(e.target.value)}
                    />
                </div>
                <div className="gateSelect">
                    <h2>GATE</h2>
                    <select
                        value={gate}
                        onChange={(e) => setGate(e.target.value)}
                        className="gateSelect"
                    >
                        <option value="">Select a gate</option>
                        {gates.map(gate => (
                            <option key={gate.id} value={gate.id}>{gate.gateNumber}</option> // Assuming gate has an id and gateNumber
                        ))}
                    </select>
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