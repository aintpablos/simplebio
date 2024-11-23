import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Subtitle from './components/Subtitle'; // Import Subtitle
import Bio from './components/Bio';
import Buttons from './components/Buttons';
import WhatIDo from './components/WhatIDo';
import WhatISell from './components/WhatISell';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                <AnimatedBackground />
                <Header />
                <Subtitle text="Cracker | Designer | Tech Enthusiast" /> {/* Add Subtitle */}
                <Routes>
                    <Route path="/" element={<div><Bio /><Buttons /></div>} />
                    <Route path="/what-i-do" element={<WhatIDo />} />
                    <Route path="/what-i-sell" element={<WhatISell />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;