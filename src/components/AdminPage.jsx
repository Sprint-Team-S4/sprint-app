import React, { useState, useEffect } from 'react';
import '../AdminCSS.css';
import AirportSelect from './AirportSelect';

const AdminPage = () => {
    const [airlines, setAirlines] = useState([]);
    const [aircraft, setAircraft] = useState([]);
    const [gate, setGate] = useState([]);
    const [flightNumber, setFlightNumber] = useState('');
    const [flightType, setFlightType] = useState('');
    const [selectedAirport, setSelectedAirport] = useState('');
    const [selectedAirline, setSelectedAirline] = useState('');
    const [selectedAircraft, setSelectedAircraft] = useState('');
    const [selectedGate, setSelectedGate] = useState('');
    const handleAirportSelect = (airportId) => {
        setSelectedAirport(airportId);
    };

    // Fetch Airlines - - - -
    useEffect(() => {
        fetch('http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/airline')

          .then(response => response.json())
          .then(data => setAirlines(data))
          .catch(error => console.error('Error fetching airlines:', error));
    }, []);

    // Fetch Gates - - - -
    useEffect(() => {
        if (selectedAirport) {
            fetch(`http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/gate/byAirport/${selectedAirport}`)
                .then(response => response.json())
                .then(data => {
                    setGate(data);
                })
                .catch(error => {
                    console.error('Error fetching airports:', error);
                });
        }
    }, [selectedAirport]);

    // Fetch Aircrafts - - - -
    useEffect(() => {
        if (selectedAirline) {
            fetch(`http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/aircraft/byAirline/${selectedAirline}`)
                .then(response => response.json())
                .then(data => {
                    setAircraft(data);
                })
                .catch(error => {
                    console.error('Error fetching aircrafts:', error);
                });
        }
    }, [selectedAirline]);

    // Submission - - - -
    const handleSubmit = (event) => {
        event.preventDefault();
        const flightData = {
            airportId: selectedAirport,
            airlineId: selectedAirline,
            aircraftId: selectedAircraft,
            gateId: selectedGate,
            flightStatus: flightType,
            flightNumber: flightNumber
        };
        fetch('http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/flight/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(flightData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Flight created:', data);
        })
        .catch(error => {
            console.error('Error creating flight:', error);
        });
    };

// ADMIN PAGE - - - - - - - - - - - - - -
    return (
        <div className="adminPage">
            <h1 className="headerAddFlight">ADD A FLIGHT</h1>
            <div className="selectAirport">
                <div className="selectAirportContainer">
                    <h2 className="selectAirportLabel">SELECT AN AIRPORT</h2>
                    <AirportSelect onSelectAirport={handleAirportSelect} />
                </div>
            </div>
                <div className="inputGroup">
                   <div className="airlineInput">
                       <h2>AIRLINE</h2>
                       <select  className="airlineSelect"
                                value={selectedAirport}
                                onChange={(e) => setSelectedAirline(e.target.value)}>
                           <option value="" disabled>Select an airline</option>
                           {airlines.map(airline => (
                               <option key={airline.id} value={airline.id}>
                                   {airline.name}
                               </option>
                           ))}
                       </select>
                   </div>
                    <div className="aircraftInput">
                        <h2>AIRCRAFT</h2>
                        <select
                            value={selectedAircraft}
                            onChange={(e) => setSelectedAircraft(e.target.value)}
                            className="aircraftSelect"
                            disabled={!selectedAirline || !aircraft.length}
                        >
                            <option value="">Select an aircraft</option>
                            {aircraft.map((ac) => (
                                <option key={ac.id} value={ac.id}>{ac.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="gateInput">
                        <h2>GATE</h2>
                        <select
                            value={selectedGate}
                            onChange={(e) => setSelectedGate(e.target.value)}
                            className="gateSelect"
                            disabled={!selectedAirport}
                        >
                            <option value="">Select a gate</option>
                            {gate.map((gate) => (
                                <option key={gate.id} value={gate.id}>{gate.name}</option>
                            ))}
                        </select>
                    </div>
                     <div className="flightNumberInput">
                        <h2>FLIGHT NUMBER</h2>
                        <input
                            type="text"
                            value={flightNumber}
                            onChange={(e) => setFlightNumber(e.target.value)}
                            className="flightNumberInput"
                            placeholder="Enter Flight Number"
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
                    <option value="Departing">Departing</option>
                    <option value="Arriving">Arriving</option>
                </select>
            </div>

            <button onClick={handleSubmit} className="submitFlight">Submit</button>
        </div>
    );
};

export default AdminPage;
