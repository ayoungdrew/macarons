import React, { useState, useEffect } from 'react';
// import logo from "../public/images/logo.svg";
import './App.scss';
import products from './products.js';
import ProductPreview from './ProductPreview';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartViewActive, setCartViewActive] = useState(false);

  useEffect(() => {
    console.log('cart items are now', cartItems);
  });

  function addToCart(product) {
    console.log('adding', product);
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(productName, index) {
    console.log(productName, index);
    const newArr = [...cartItems];
    newArr.splice(index, 1);
    setCartItems(newArr);
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
            {cartItems.map((cartItem, index) => (
              <ProductPreview
                product={cartItem}
                index={index}
                cartView={true}
                removeFromCart={() => removeFromCart(cartItem.name, index)}
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
          <li className="nav-item">
            <a href="">Menu</a>
          </li>
          <li className="nav-item">
            <a href="">Beverages</a>
          </li>
          <li className="nav-item">
            <a href="">Gifts</a>
          </li>
          <li className="nav-item">|</li>
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
            addToCart={() => addToCart(product)}
            addedStatus={cartItems.some(x => x.name === product.name)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
