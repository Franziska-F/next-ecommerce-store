import {
  React,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';

import { css } from '@emotion/react';

import { productDatabase } from '../util/database';

const card = css`
  background-color: #fffef2;
  color: #71716d;

  .product-section {
    border-top: 1px solid #71716d;
  }
  .inner-product-section {
    border-top: 1px solid #71716d;
    padding: 16px;
    display: flex;
    justify-content: space-evenly;
  }
  .checkout {
    text-align: end;
  }
`;

export default function Cart(props) {
  const [inCart, setInCart] = useState(props.product);
  //  const [count, setCount] = useState(1);

  let Sum = props.product.reduce(function (prev, current) {
    return prev + current.quantitiy * current.price;
  }, 0);

  const [totalSum, setTotalSum] = useState(Sum);

  return (
    <div>
      <Head>
        <title> The Butterflyshop || Cart </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <main css={card}>
        <h1>Your cart </h1>
        {}{' '}
        <div className="product-section">
          {inCart.map((detail) => {
            return (
              <div className="inner-product-section" key={detail.id}>
                <div>{detail.name}</div>{' '}
                <div>Price: {detail.price / 100} € </div>
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

                      newCart = currentCart.filter(
                        (productInCart) => productInCart.id !== detail.id,
                      );
                      // console.log(newCart);

                      let newArray = inCart.filter(
                        (item) => item.id !== detail.id,
                      );
                      console.log(newArray);

                      Cookies.set('products', JSON.stringify(newCart));

                      setTotalSum(Sum);
                      setInCart([...newArray]);
                      console.log(newCart);

                      // console.log(props.product);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkout">
          <div>
            <span>Total sum: {totalSum / 100}</span>
          </div>
          <br />
          <div>
            <Link href="/checkout">
              <button>Check out</button>
            </Link>
          </div>
        </div>
      </main>
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
