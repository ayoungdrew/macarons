import React from 'react';

const ProductPreview = props => {
  const { name, description, images } = props.product;

  const addItem = () => {
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
            className={'btn-add ' + (props.addedStatus ? 'added' : '')}
            type="button"
            disabled={props.addedStatus}
            onClick={() => addItem()}
          >
            {props.addedStatus ? <span>&#10003; </span> : null}
            {props.addedStatus ? 'Added to cart' : '+ Add to cart'}
          </button>
        </div>
      )}
    </li>
  );
};

export default ProductPreview;
