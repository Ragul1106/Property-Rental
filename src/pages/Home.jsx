import { useEffect, useState } from 'react';
import { fetchProperties } from '../api/api';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties().then(res => setProperties(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Popular Rentals</h2>
      <div className="row">
        {properties.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
