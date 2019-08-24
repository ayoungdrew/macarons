import React, { useState, useEffect } from 'react';
import './App.scss';
import products from './products.js';
import ProductPreview from './ProductPreview';
import Cart from './Cart';
import Footer from './Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartViewActive, setCartViewActive] = useState(false);

  useEffect(() => {});

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
      <div className="nav">
        {' '}
        <img
          src={process.env.PUBLIC_URL + '/images/logo.svg'}
          className="nav-logo"
          alt="logo"
        />
        <ul className="nav-links">
          <li className="nav-item">Menu</li>
          <li className="nav-item">Beverages</li>
          <li className="nav-item">Gifts</li>
          <li>|</li>
          <li className="nav-item" onClick={() => toggleCartView()}>
            <div className="cart-icon-wrapper">
              <img
                src={process.env.PUBLIC_URL + '/images/cart_icon.svg'}
                className="cart-icon"
                alt="logo"
              />
              <div className="cart-quantity" onClick={() => toggleCartView()}>
                {cartItems.length}
              </div>
              <span>Cart</span>
            </div>
          </li>
        </ul>
      </div>
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
      <Footer />
    </div>
  );
};

export default App;
