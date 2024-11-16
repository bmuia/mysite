import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Advert from './Components/Advert';
import AssetList from './Components/AssetList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Advert />} />
        <Route path="/assets" element={<AssetList />} />
      </Routes>
    </Router>
  );
}

export default App;
