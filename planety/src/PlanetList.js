// PlanetList.js
import React from 'react';
import Planet from './Planet';
import styles from './PlanetList.module.css'; // Import CSS module

const planets = ['Merkur', 'Venuše', 'Země', 'Mars', 'Jupiter', 'Saturn', 'Uran', 'Neptun'];

function PlanetList({ setSelectedPlanet }) {
  return (
    <div className={styles.planetList}>
      {planets.map(planet => (
        <Planet key={planet} name={planet} onClick={() => setSelectedPlanet(planet)} />
      ))}
    </div>
  );
}

export default PlanetList;
