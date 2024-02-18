import React, { useEffect, useState } from 'react';

const planetData = {
    Merkur: {
      diameter: '4,880 km',
      mass: '3.30 × 10^23 kg',
      gravity: '3.7 m/s²',
      atmosphere: 'Téměř žádná',
      moons: [],
      image: require('./mercury.png').default // Adjust the path to your image file
    },
    Venuše: {
      diameter: '12,104 km',
      mass: '4.87 × 10^24 kg',
      gravity: '8.87 m/s²',
      atmosphere: 'Oxid uhličitý 96.5%, Dusík 3.5%',
      moons: [],
      image: require('./venus.png').default
    },
    Země: {
      diameter: '12,742 km',
      mass: '5.97 × 10^24 kg',
      gravity: '9.8 m/s²',
      atmosphere: 'Dusík 78%, Kyslík 21%, Ostatní 1%',
      moons: ['Měsíc'],
      image: require('./earth.png').default
    },
    Mars: {
      diameter: '6,779 km',
      mass: '6.39 × 10^23 kg',
      gravity: '3.7 m/s²',
      atmosphere: 'Oxid uhličitý 95.3%, Dusík 2.7%, Argon 1.6%',
      moons: ['Phobos', 'Deimos'],
      image: require('./mars.png').default
    },
    Jupiter: {
      diameter: '139,820 km',
      mass: '1.90 × 10^27 kg',
      gravity: '24.79 m/s²',
      atmosphere: 'Vodík 89.8%, Helium 10.2%',
      moons: ['Io', 'Europa', 'Ganymede', 'Callisto'],
      image: require('./jupiter.png').default
    },
    Saturn: {
      diameter: '116,460 km',
      mass: '5.68 × 10^26 kg',
      gravity: '10.44 m/s²',
      atmosphere: 'Vodík 96.3%, Helium 3.25%',
      moons: ['Titan', 'Rhea', 'Iapetus', 'Dione'],
      image: require('./saturn.png').default
    },
    Uran: {
      diameter: '50,724 km',
      mass: '8.68 × 10^25 kg',
      gravity: '8.69 m/s²',
      atmosphere: 'Vodík 82.5%, Helium 15.2%, Metan 2.3%',
      moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'],
      image: require('./uranus.png').default
    },
    Neptun: {
      diameter: '49,244 km',
      mass: '1.02 × 10^26 kg',
      gravity: '11.15 m/s²',
      atmosphere: 'Vodík 80.0%, Helium 19.0%, Metan 1.5%',
      moons: ['Triton', 'Nereid', 'Proteus'],
      image: require('./neptune.png').default
    }
  };


function PlanetDetail({ selectedPlanet }) {
  const [planetInfo, setPlanetInfo] = useState(null);

  useEffect(() => {
    if (selectedPlanet) {
      setTimeout(() => {
        setPlanetInfo(planetData[selectedPlanet]);
      }, 1000);
    }
  }, [selectedPlanet]);

  if (!selectedPlanet) {
    return <div>
        <p>Vyberte planetu</p>
        </div>;
  }

  if (!planetInfo) {
    return <div>
        <p>...</p>
    </div>;
  }

  return (
    <div className="planet-detail">
      <h2>{selectedPlanet}</h2>
      <div className="planet-info">
        <div className="planet-image">
          <img src={planetInfo.image} alt={selectedPlanet} />
        </div>
        <div className="planet-data">
          <p>Průměr: {planetInfo.diameter}</p>
          <p>Masa: {planetInfo.mass}</p>
          <p>Gravitace: {planetInfo.gravity}</p>
          <p>Atomsféra: {planetInfo.atmosphere}</p>
          <p>Měsíce: {planetInfo.moons.join(', ')}</p>

        </div>
      </div>
    </div>
  );
}

export default PlanetDetail;
