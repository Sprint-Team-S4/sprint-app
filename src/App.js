import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import FlightPage from './components/FlightPage';
import AdminPage from './components/AdminPage'; // Import the AdminPage component
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
//    App.url="http://sprint6-env.eba-9kw5xtpk.us-east-1.elasticbeanstalk.com"
    render() {
        return (
            <Router>
                <div className="App">
                    {/* ... your navbar and other components */}
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/flights" element={<FlightPage />} />
                        <Route path="/admin" element={<AdminPage />} /> {/* Add this line */}
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;