import React from 'react';
import ProductPreview from './ProductPreview';

const Cart = props => {
  const removeFromCart = (itemName, index) => {
    props.removeFromCart(itemName, index);
  };

  const toggleCartView = () => {
    props.toggleCartView();
  };

  return (
    <div className="cart-wrapper">
      <div
        className={
          'cart-background ' + (props.cartViewActive ? 'active' : 'inactive')
        }
      />
      <div
        className={
          'cart-pane ' + (props.cartViewActive ? 'active' : 'inactive')
        }
      >
        <p
          className="cart-close"
          href=""
          onClick={() => {
            toggleCartView();
          }}
        >
          Close
        </p>
        <ul className="cart-item-list">
          {props.cartItems.map((cartItem, index) => (
            <ProductPreview
              product={cartItem}
              index={index}
              cartView={true}
              removeFromCart={() => {
                removeFromCart(cartItem.name, index);
              }}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
