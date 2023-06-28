import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './components/Main'
import Error from './pages/Error';
import Timeline from './pages/Timeline';
import Buttons from './pages/Buttons';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, []);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="*" element={<Error />} />
                  
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/buttons" element={<Buttons />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
