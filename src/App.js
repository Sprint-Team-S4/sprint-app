import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import FlightPage from './components/FlightPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            Home
                        </a>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/flights" element={<FlightPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;