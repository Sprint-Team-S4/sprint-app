import React, { useState } from 'react';
import AdminB from '../site-images/AdminB.png';
import '../App.css';
const AdminLogin = () => {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
            {showLogin ? (
                <div style={{ border: '1px solid black', padding: '10px' }}>
                    <div style={{ textAlign: 'right' }}>
                        <button onClick={toggleLogin}>X</button>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            ) : (
                <img
                    src={AdminB}
                    alt="Admin Badge"
                    onClick={toggleLogin}
                    style={{ cursor: 'pointer',
                    width: '4.8em'}}
                />
            )}
        </div>
    );
};

export default AdminLogin;