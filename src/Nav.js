import React from 'react';

const Nav = props => {
  const viewCart = () => {
    props.toggleCartView();
  };
  return (
    <div className="nav">
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
        <li className="nav-item" onClick={() => viewCart()}>
          <div className="nav-cart-wrapper">
            <img
              src={process.env.PUBLIC_URL + '/images/cart_icon.svg'}
              className="nav-cart-icon"
              alt="logo"
            />
            {props.cartItems.length ? (
              <div className="nav-cart-quantity" onClick={() => viewCart()}>
                {props.cartItems.length}
              </div>
            ) : null}
            <span>Cart</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
