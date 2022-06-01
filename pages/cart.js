import {
  React,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import Head from 'next/head';

import { productDatabase } from '../util/database';

export default function Cart(props) {
  const [isInCart, setIsInCart] = useState('quantity' in props.product);
  //  const [count, setCount] = useState(1);
  console.log(props);
  return (
    <div>
      <Head>
        <title> The Butterflyshop || Cart </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <h1>Your cart </h1>
      {}{' '}
      <div className="card-wrapper">
        {props.product.map((detail) => {
          return (
            <div key={detail.id}>
              <div>{detail.name}</div> <div>Price: {detail.price / 100} € </div>
              <div>Quantity: {detail.quantitiy} </div>{' '}
              {/* } <div className="quantity-counter">
                <button
                  className="btn-control"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  ⬇️
                </button>
                <span className="count">{count}</span>
                <button
                  className="btn-control"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  ⬆️
                </button>
                </div> { */}
              <div className="remove-btn">
                <button
                  onClick={() => {
                    const currentCart = Cookies.get('products')
                      ? JSON.parse(Cookies.get('products'))
                      : [];
                    let newCart;

                    // props.product.find(
                    //  (productInCart) => productInCart.id === props.product.id,
                    // );
                    // console.log(currentCart);

                    newCart = currentCart.filter(
                      (productInCart) => productInCart.id !== detail.id,
                    );
                    console.log(newCart);

                    Cookies.set('products', JSON.stringify(newCart));

                    setIsInCart(false);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  // get cookie content
  const currentCart = JSON.parse(context.req.cookies.products || '[]');
  // Get data from database

  const productInCart = currentCart.map((item) => {
    // create a variable to store item found
    const itemFound = productDatabase.find((product) => product.id === item.id);

    // console.log(itemFound);

    const newCart = { ...itemFound, quantitiy: item.count };
    // console.log(newCart);
    return newCart;
  });
  // console.log(productInCart);
  return {
    props: {
      product: productInCart || null,
    },
  };
}
