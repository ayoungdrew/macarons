import React, { useState } from 'react';

const ProductPreview = props => {
  const [addedStatus, setAddedStatus] = useState(false);

  const addItem = () => {
    console.log('bleh');
    setAddedStatus(true);
    props.addToCart();
  };

  function remove() {
    console.log('removing!');
  }

  return (
    <li className="product-row">
      <div className="product-thumbnail">
        <img
          srcSet={`${props.images.small} 500w, ${props.images.medium} 1000w, ${
            props.images.large
          } 2000w`}
        />
      </div>
      <div className="product-info">
        <p>{props.name}</p>
      </div>
      {props.cartView ? (
        <a className="upvotes" onClick={remove}>
          Remove
        </a>
      ) : (
        <div className="product-add">
          <button
            type="button"
            disabled={addedStatus}
            onClick={() => addItem()}
          >
            {addedStatus ? 'added' : 'add'}
          </button>
        </div>
      )}
    </li>
  );
};

export default ProductPreview;
