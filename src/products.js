const products = [
  {
    name: 'Custom Gift Box',
    quantity: 'Assorted Flavors',
    description:
      'This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes!',
    more:
      'We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!',
    price: 5500,
    images: {
      small: `${process.env.PUBLIC_URL + '/images/custom_gift_box.png'}`,
      medium: `${process.env.PUBLIC_URL + '/images/custom_gift_box@2x.png'}`,
      large: `${process.env.PUBLIC_URL + '/images/custom_gift_box@3x.png'}`
    }
  },
  {
    name: 'Vanilla Earl Grey Macaron',
    quantity: '1 piece',
    description:
      'Our most popular flavor! Each macaron is filled with earl grey ganache.',
    price: 375,
    images: {
      small: `${process.env.PUBLIC_URL + '/images/vanilla.png'}`,
      medium: `${process.env.PUBLIC_URL + '/images/vanilla@2x.png'}`,
      large: `${process.env.PUBLIC_URL + '/images/vanilla@3x.png'}`
    }
  },
  {
    name: 'Rose Macarons',
    quantity: '1 piece',
    description:
      'Our most romatic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise.',
    price: 375,
    images: {
      small: `${process.env.PUBLIC_URL + '/images/rose.png'}`,
      medium: `${process.env.PUBLIC_URL + '/images/rose@2x.png'}`,
      large: `${process.env.PUBLIC_URL + '/images/rose@3x.png'}`
    }
  }
];

export default products;
