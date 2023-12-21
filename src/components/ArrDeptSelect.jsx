import React, { useState } from 'react';
import '../App.css';

const ArrDeptSelect = ({ onSelectionChange }) => {
    const [selectedOption, setSelectedOption] = useState('arrivals'); // default to 'arrivals'

    const handleSelection = (option) => {
        setSelectedOption(option);
        onSelectionChange(option);
        // Uncomment and add logic to trigger a query based on the selection
        /*
        fetch(`http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/api/flights?airport=${selectedAirport}&type=${option}`)
          .then(response => response.json())
          .then(data => {
            // Handle the fetched data
          })
          .catch(error => console.error('Error fetching flights:', error));
        */
    };

    return (
        <div>
            <button
                className={`flight-button flight-arrivals ${selectedOption === 'arrivals' ? 'active' : ''}`}
                onClick={() => handleSelection('arrivals')}
            >
                Arriving Aircrafts
            </button>
            <button
                className={`flight-button flight-departures ${selectedOption === 'departures' ? 'active' : ''}`}
                onClick={() => handleSelection('departures')}
            >
                Departing Aircrafts
            </button>
        </div>
    );
};

export default ArrDeptSelect;