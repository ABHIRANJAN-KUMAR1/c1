import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ₹{totalAmount}</p>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
    </div>
  );
}

export default CartPage;
