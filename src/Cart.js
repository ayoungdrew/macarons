import React from 'react';
import ProductPreview from './ProductPreview';

const Cart = ({
  cartItems,
  cartViewActive,
  removeFromCart,
  toggleCartView
}) => {
  const removeItem = (itemName, index) => {
    removeFromCart(itemName, index);
  };

  const toggleCart = () => {
    toggleCartView();
  };

  return (
    <div className="cart-wrapper">
      <div
        className={
          'cart-background ' + (cartViewActive ? 'active' : 'inactive')
        }
      />
      <div className={'cart-pane ' + (cartViewActive ? 'active' : 'inactive')}>
        <p
          className="cart-close"
          href=""
          onClick={() => {
            toggleCart();
          }}
        >
          Close
        </p>
        <h2>My Cart</h2>
        {cartItems.length > 0 ? (
          <ul className="cart-item-list">
            {cartItems.map((cartItem, index) => (
              <ProductPreview
                product={cartItem}
                index={index}
                cartView={true}
                removeFromCart={() => {
                  removeItem(cartItem.name, index);
                }}
                key={index}
              />
            ))}
          </ul>
        ) : (
          <p className="font-italic">No items in cart</p>
        )}
        <div className="cart-total">
          <p>Total</p>
          <p>
            {cartItems
              .reduce((a, b) => a + b.price, 0)
              .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
