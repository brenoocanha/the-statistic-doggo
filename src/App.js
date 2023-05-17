import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import About from './pages/About';
import Statistic from './pages/Statistic';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <NavigationMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/statistic" element={<Statistic />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
