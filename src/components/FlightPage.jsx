import React, { useState } from 'react';
import AirportSelect from './AirportSelect';
import ArrDeptSelect from './ArrDeptSelect';
import FlightInfo from './FlightInfo'; // Placeholder for your FlightInfo component
import AdminLogin from './AdminLogin'; // Assuming you have this component
import SprintBackground from '../site-images/SprintBackground.png';
import '../App.css';

const FlightPage = () => {
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [flightType, setFlightType] = useState('arrivals'); // Default to 'arrivals'

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
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <AirportSelect onSelectAirport={setSelectedAirport} />
                <ArrDeptSelect onSelectionChange={setFlightType} />
            </div>
            <FlightInfo airport={selectedAirport} flightType={flightType} />
        </div>
    );
};

export default FlightPage;