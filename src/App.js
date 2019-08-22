import React, { useState, useEffect } from 'react';
// import logo from "../public/images/logo.svg";
import './App.scss';
import products from './products.js';
import ProductPreview from './ProductPreview';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartViewActive, setCartViewActive] = useState(true);

  useEffect(() => {
    console.log('cart items are now', cartItems);
  });

  function addToCart(product) {
    console.log('adding', product);
    setCartItems([...cartItems, product]);
  }

  function toggleCartView(e) {
    console.log('cart toggle', e);
    setCartViewActive(!cartViewActive);
  }

  return (
    <div className="page-wrapper">
      <div className="cart-wrapper">
        <div
          className={
            'cart-background ' + (cartViewActive ? 'active' : 'inactive')
          }
        />
        <div
          className={'cart-pane ' + (cartViewActive ? 'active' : 'inactive')}
        >
          <p
            href=""
            onClick={() => {
              toggleCartView();
            }}
          >
            Close
          </p>
          <ul className="cart-item-list">
            {cartItems.map(cartItem => (
              <ProductPreview
                addToCart={() => addToCart(cartItem)}
                name={cartItem.name}
                images={cartItem.images}
                cartView={true}
              />
            ))}
          </ul>
        </div>
      </div>
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
          <li className="nav-item" onClick={() => toggleCartView()}>
            Cart {cartItems.length}
          </li>
        </ul>
      </div>
      <ul className="product-list">
        {products.map(product => (
          <ProductPreview
            addToCart={() => addToCart(product)}
            name={product.name}
            images={product.images}
            cartView={false}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
