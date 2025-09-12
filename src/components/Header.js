import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div style={{ padding: '10px', backgroundColor: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Plant Paradise</h2>
      <div>
        <Link to="/products" style={{ marginRight: '20px' }}>Products</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </div>
    </div>
  );
}

export default Header;
