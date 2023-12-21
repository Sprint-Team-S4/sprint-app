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
    const [airlineInput, setAirlineInput] = useState('');
    const [aircraftInput, setAircraftInput] = useState('');
    const [gateInput, setGateInput] = useState('');


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
            airlineId: airlineInput,
            aircraftId: aircraftInput,
            gateId: gateInput,
            flightStatus: flightType,
            flightNumber: flightNumber
        };
        fetch('http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/flight', {
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
                     <input
                         type="text"
                         value={airlineInput}
                         onChange={(e) => setAirlineInput(e.target.value)}
                         className="airlineInput"
                         placeholder="Enter Airline"
                     />
                 </div>
                 <div className="aircraftInput">
                     <h2>AIRCRAFT</h2>
                     <input
                         type="text"
                         value={aircraftInput}
                         onChange={(e) => setAircraftInput(e.target.value)}
                         className="aircraftInput"
                         placeholder="Enter Aircraft"
                     />
                 </div>
                 <div className="gateInput">
                     <h2>GATE</h2>
                     <input
                         type="text"
                         value={gateInput}
                         onChange={(e) => setGateInput(e.target.value)}
                         className="gateInput"
                         placeholder="Enter Gate"
                     />
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