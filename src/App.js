import React, { useState, useEffect } from 'react';
import './App.scss';
import products from './products.js';
import ProductPreview from './ProductPreview';
import Cart from './Cart';
import Nav from './Nav';
import Footer from './Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartViewActive, setCartViewActive] = useState(false);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productName, index) => {
    const newArr = [...cartItems];
    newArr.splice(index, 1);
    setCartItems(newArr);
  };

  const toggleCartView = e => {
    setCartViewActive(!cartViewActive);
  };

  return (
    <div className="page-wrapper">
      <Cart
        cartItems={cartItems}
        cartViewActive={cartViewActive}
        removeFromCart={removeFromCart}
        toggleCartView={toggleCartView}
      />
      <Nav cartItems={cartItems} toggleCartView={toggleCartView} />
      <div className="page-content">
        <h2>Menu</h2>
        <ul className="product-list">
          {products.map((product, index) => (
            <ProductPreview
              product={product}
              index={index}
              cartView={false}
              addToCart={() => {
                addToCart(product);
              }}
              addedStatus={cartItems.some(x => x.name === product.name)}
              key={product.name}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;
