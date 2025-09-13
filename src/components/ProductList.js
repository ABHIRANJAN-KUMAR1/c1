import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Aloe Vera', price: 150, category: 'Succulents', image:'/images/aloe-vera.jpg' },
  { id: 2, name: 'Fern', price: 200, category: 'Ferns', image: '/images/fern.jpg' },
  { id: 3, name: 'Jade Plant', price: 250, category: 'Succulents', image: '/images/jade-plant.jpg' },
  { id: 4, name: 'Peace Lily', price: 300, category: 'Flowering Plants', image: '/images/peace-lily.jpg' },
  { id: 5, name: 'Snake Plant', price: 180, category: 'Succulents', image: '/images/snake-plant.jpg' },
  { id: 6, name: 'Orchid', price: 350, category: 'Flowering Plants', image: '/images/orchid.jpg' },
];


function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const isAdded = (id) => cartItems.find(item => item.id === id);

  return (
    <div style={{ padding: '20px' }}>
      {['Succulents', 'Ferns', 'Flowering Plants'].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {products.filter(p => p.category === category).map(product => (
              <div key={product.id} style={{ border: '1px solid gray', padding: '10px' }}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => handleAdd(product)} disabled={isAdded(product.id)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
