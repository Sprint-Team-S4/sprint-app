import React, { useState } from 'react';

const ArrDeptSelect = ({ onSelectionChange }) => {
    const [selectedOption, setSelectedOption] = useState('arrivals'); // default to 'arrivals'

    const handleSelection = (option) => {
        setSelectedOption(option);
        onSelectionChange(option);
        // Uncomment and add logic to trigger a query based on the selection
        /*
        fetch(`http://localhost:8080/api/flights?airport=${selectedAirport}&type=${option}`)
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
                style={{ opacity: selectedOption === 'arrivals' ? 0.5 : 1 }}
                onClick={() => handleSelection('arrivals')}
            >
                Arrivals
            </button>
            <button
                style={{ opacity: selectedOption === 'departures' ? 0.5 : 1 }}
                onClick={() => handleSelection('departures')}
            >
                Departures
            </button>
        </div>
    );
};

export default ArrDeptSelect;