import { useState } from 'react';

import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';

import { css } from '@emotion/react';

import { getProducts } from '../util/database';

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

  const sum = props.product.reduce(function (prev, current) {
    return prev + current.quantitiy * current.price;
  }, 0);

  const [totalSum, setTotalSum] = useState(sum);

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
              <div
                className="inner-product-section"
                key={detail.id}
                data-test-id={`cart-product-${detail.id}`}
              >
                <div>{detail.name}</div>{' '}
                <div>Price: {detail.price / 100} € </div>
                <div data-test-id={`cart-product-quantity-${detail.id}`}>
                  Quantity: {detail.quantitiy}{' '}
                </div>{' '}
                <div className="remove-btn">
                  <button
                    data-test-id={`cart-product-remove-${detail.id}`}
                    onClick={() => {
                      const currentCart = Cookies.get('cart')
                        ? JSON.parse(Cookies.get('cart'))
                        : [];
                      // let newCart;
                      const newCart = currentCart.filter(
                        (productInCart) => productInCart.id !== detail.id,
                      );

                      const newArray = inCart.filter(
                        (item) => item.id !== detail.id,
                      );

                      Cookies.set('cart', JSON.stringify(newCart));

                      setInCart([...newArray]);

                      const newSum = newArray.reduce(function (prev, current) {
                        return prev + current.quantitiy * current.price;
                      }, 0);

                      setTotalSum(newSum);
                      props.setItemInCart(newCart);
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
            <span data-test-id="cart-total">Total sum: {totalSum / 100}</span>
          </div>
          <br />
          <div>
            <Link href="/checkout">
              <button data-test-id="cart-checkout">Check out</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await getProducts();
  // get cookie content
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  // Get data from database

  const productInCart = currentCart.map((item) => {
    // create a variable to store item found
    const itemFound = products.find((product) => product.id === item.id);

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
