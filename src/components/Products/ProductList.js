import React from 'react';
import ProductItem from './ProductItem';

// import classes from './ProductList.module.css';

const localPath = 'http://localhost:3000/assets/';
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Apple iMac',
    imgUrl: `${localPath}item1.jpg`,
    price: 380,
  },
  {
    id: 2,
    name: 'Sony Camera',
    imgUrl: `${localPath}item2.jpg`,
    price: 220,
  },
  {
    id: 3,
    name: 'Nikon Camera',
    imgUrl: `${localPath}item3.jpeg`,
    price: 170,
  },
  {
    id: 4,
    name: 'Harry Potter Book',
    imgUrl: `${localPath}item4.jpg`,
    price: 60,
  },
  {
    id: 5,
    name: 'Apple MacBook',
    imgUrl: `${localPath}item5.jpg`,
    price: 35,
  },
  {
    id: 6,
    name: 'Pencil Holder',
    imgUrl: `${localPath}item6.jpg`,
    price: 23,
  },
  {
    id: 7,
    name: 'Book With 3 Pens',
    imgUrl: `${localPath}item7.jpg`,
    price: 16,
  },
  {
    id: 8,
    name: 'Wooden Cup, Note Book, Pen',
    imgUrl: `${localPath}item8.jpeg`,
    price: 80,
  },
  {
    id: 9,
    name: 'Sony Headset',
    imgUrl: `${localPath}item9.jpg`,
    price: 70,
  },
  {
    id: 10,
    name: 'Living Room Set',
    imgUrl: `${localPath}item10.jpg`,
    price: 105,
  },
];

const ProductList = () => {
  return (
    <div className='item-list'>
      <div className='container-fluid'>
        <div className='row g-3'>
          {DUMMY_PRODUCTS.map((product, index) => (
            <ProductItem
              key={index}
              id={product.id}
              name={product.name}
              imgUrl={product.imgUrl}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
