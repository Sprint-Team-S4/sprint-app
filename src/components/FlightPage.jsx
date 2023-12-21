import React, { useState } from 'react';
import AirportSelect from './AirportSelect';
import ArrDeptSelect from './ArrDeptSelect';
import FlightInfo from './FlightInfo'; // Placeholder for your FlightInfo component
import AdminLogin from './AdminLogin'; // Assuming you have this component
import SprintBackground from '../site-images/SprintBackground.png';
import '../App.css';

const FlightPage = () => {
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [flightType, setFlightType] = useState('arriving'); // Default to 'arrivals'

    // Placeholder function for handling flight data fetch
    // This should be replaced with your actual data fetching logic
    const fetchFlightData = (airport, type) => {
        console.log(`Fetching ${type} for airport: ${airport}`);
        // Fetch logic goes here
    };

    // Update flight data whenever the airport or flight type changes
    React.useEffect(() => {
        if (selectedAirport) {
            fetchFlightData(selectedAirport, flightType);
        }
    }, [selectedAirport, flightType]);

    return (
        <div className="flightPage">
            <AdminLogin />
            <h1 className="tagline" style={{ fontSize: '64px' }}>Sprint Airlines</h1>
            <h2 className="tagline" style={{ fontSize: '20px' }}>Fly Faster, Soar Smarter</h2><div className="flight-view-box">
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <AirportSelect onSelectAirport={setSelectedAirport} /><h2 className="tagline2" style={{ fontSize: '32px'}}>What will you be searchin for today laddy?</h2>
                <ArrDeptSelect onSelectionChange={setFlightType} selectedAirport={selectedAirport} />
            </div>
            <FlightInfo airport={selectedAirport} flightType={flightType} />
        </div></div>
    );
};

export default FlightPage;