import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Landing = () => {
    const navigate = useNavigate();

    const goToFlightPage = () => {
        navigate('/flights');
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff', // A modern blue shade
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease', // Smooth transition for hover effect
    };

    const hoverStyle = {
        backgroundColor: '#0056b3', // Darker shade of blue for hover
    };

    const containerStyle = {
        height: '100vh', // Full view height
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={containerStyle}>
            <button
                style={{ ...buttonStyle, ...(isHovered ? hoverStyle : null) }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} onClick={goToFlightPage}
            >
                Click to view flights
            </button>
        </div>
    );
};

export default Landing;