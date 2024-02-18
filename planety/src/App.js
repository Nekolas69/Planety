// App.js
import React, { useState } from 'react';
import PlanetList from './PlanetList';
import PlanetDetail from './PlanetDetail';
import './App.css';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="App">
      <h1>Planetová Encyklopedie</h1>
      <PlanetList setSelectedPlanet={setSelectedPlanet} />
      <PlanetDetail selectedPlanet={selectedPlanet} />
    </div>
  );
}

export default App;
