import React, { useState } from 'react';

const ProductPreview = props => {
  const { name, description, images } = props.product;

  // const [addedStatus, setAddedStatus] = useState(false);

  const addItem = () => {
    // setAddedStatus(true);
    props.addToCart();
  };

  const removeItem = () => {
    props.removeFromCart(name, props.index);
  };

  return (
    <li className="product-row">
      <div className="product-thumbnail">
        <img
          srcSet={`${images.small} 500w, ${images.medium} 1000w, ${
            images.large
          } 2000w`}
        />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>

        {props.cartView ? (
          <a className="upvotes" onClick={() => removeItem()}>
            Remove
          </a>
        ) : null}
      </div>
      {props.cartView ? null : (
        <div className="product-add">
          <button
            type="button"
            disabled={props.addedStatus}
            onClick={() => addItem()}
          >
            {props.addedStatus ? 'added' : 'add'}
          </button>
        </div>
      )}
    </li>
  );
};

export default ProductPreview;
