import React, { useState } from 'react';
import '../App.css';

const ArrDeptSelect = ({ onSelectionChange, selectedAirport }) => {
    const [selectedOption, setSelectedOption] = useState('arriving'); // default to 'arriving'

    const handleSelection = (option) => {
        setSelectedOption(option);
        onSelectionChange(option);

        // Ensure an airport is selected before fetching
        if (selectedAirport) {
            const apiUrl = `http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com/flight/${option}/${selectedAirport}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Handle the fetched data
                    console.log(data); // Log the data or set it to state
                })
                .catch(error => console.error('Error fetching flights:', error));
        }
    };

    return (
        <div>
            <button
                className={`flight-button ${selectedOption === 'arriving' ? 'active' : ''}`}
                onClick={() => handleSelection('arriving')}
            >
                Arriving Aircrafts
            </button>
            <button
                className={`flight-button ${selectedOption === 'departing' ? 'active' : ''}`}
                onClick={() => handleSelection('departing')}
            >
                Departing Aircrafts
            </button>
        </div>
    );
};

export default ArrDeptSelect;