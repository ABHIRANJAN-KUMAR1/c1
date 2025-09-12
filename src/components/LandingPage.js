import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundImage: 'url(https://via.placeholder.com/800x400)', backgroundSize: 'cover' }}>
      <h1>Plant Paradise</h1>
      <p>We offer the best selection of houseplants to enhance your home’s beauty.</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
}

export default LandingPage;
