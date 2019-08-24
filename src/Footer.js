import React from 'react';

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>
          We are committed to serving the freshest, most delightful treats.
        </h3>
        <div>
          <img
            src={process.env.PUBLIC_URL + '/images/facebook_icon.svg'}
            className="cart-icon"
            alt="logo"
          />
          <img
            src={process.env.PUBLIC_URL + '/images/instagram_icon.svg'}
            className="cart-icon"
            alt="logo"
          />{' '}
          <img
            src={process.env.PUBLIC_URL + '/images/twitter_icon.svg'}
            className="cart-icon"
            alt="logo"
          />
          <p className="footer-copyright">© 2019 MACARONS</p>
        </div>
      </div>
      <div className="footer-right">
        <h4>Company</h4>
        <ul className="footer-link-list">
          <li>About</li>
          <li>Locations</li>
          <li>Contact Us</li>
        </ul>
        <h4>Orders</h4>
        <ul className="footer-link-list">
          <li>Order Tracker</li>
          <li>Delivery FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
