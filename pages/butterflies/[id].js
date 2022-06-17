import { useState } from 'react';

import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';

import { css } from '@emotion/react';

import { getProduct } from '../../util/database';

const main = css`
  background-color: #fffef2;
  padding-top: 36px;
  padding-bottom: 110px;
`;

const wrapper = css`
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f5e8;
  padding: 12px;

  h1 {
    font-weight: lighter;
    color: #71716d;
    padding: 32px;
  }
  h2 {
    font-weight: lighter;
    color: #71716d;
  }
  img {
    border-radius: 4px;
  }
  .text-container {
    text-align: center;
    color: #272727;
  }
  .description {
    border-top: 2px solid #272727;
  }
  .description p {
    line-height: 32px;
  }
  .price {
    font-size: 20px;
    color: #71716d;
  }
  .quantity-counter {
    display: flex;
    justify-content: space-evenly;
  }
  .count {
    border-radius: 50%;
    background-color: #333333;
    align-items: center;
    color: #f1f0e3;
    height: 24px;
    width: 26px;
    text-align: center;
  }
  .btn-control {
    background-color: #f6f5e8;
    border: #f6f5e8;
    font-size: 24px;
    margin: 0 12px;
    cursor: pointer;
  }
  .addCard-btn {
    background-color: #333333;
    color: #f1f0e3;
    margin: 12px;
    padding: 16px 32px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export default function ButterflyDetails(props) {
  // const [isInCart, setIsInCart] = useState('count' in props.butterfly);
  const [count, setCount] = useState(1);

  if (!props.butterfly) {
    return (
      <div>
        <Head>
          <title> The Butterflyshop || {props.butterfly.name} </title>
          <meta name="description" content="A shop for the best butterflies" />
        </Head>
        <h1>Product not found</h1>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title> The Butterflyshop || {props.butterfly.name} </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <main css={main}>
        <div css={wrapper}>
          <h1>{props.butterfly.name} </h1>

          <div>
            <Image
              src={`/images/${props.butterfly.id}.jpeg`}
              width="400"
              height="300"
              data-test-id="product-image"
            />
          </div>
          <div className="text-container">
            <h2>{props.butterfly.type}</h2>

            <div className="price" data-test-id="product-price">
              {' '}
              {props.butterfly.price / 100}{' '}
            </div>

            <div className="description">
              <p>{props.butterfly.description}</p>
            </div>
          </div>
          <div className="btn-container">
            {' '}
            <div className="quantity-counter">
              <button
                className="btn-control"
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <input
                data-test-id="product-quantity"
                className="count"
                value={count}
              />

              <button
                className="btn-control"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              data-test-id="product-add-to-cart"
              className="addCard-btn"
              onClick={() => {
                const currentCart = Cookies.get('products') // is there a cookie with value 'product'?
                  ? JSON.parse(Cookies.get('products'))
                  : [];
                // if not, return empty array
                let newCart;

                // is product inside cart?

                if (
                  currentCart.find(
                    (productsInCart) =>
                      props.butterfly.id === productsInCart.id,
                  )
                ) {
                  newCart = currentCart.map((obj) =>
                    obj.id === props.butterfly.id
                      ? { ...obj, count: obj.count + count }
                      : obj,
                  );
                } else {
                  newCart = [
                    ...currentCart,
                    { id: props.butterfly.id, count: count },
                  ];
                }

                Cookies.set('products', JSON.stringify(newCart));

                props.setItemInCart(newCart);
              }}
            >
              {' '}
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  /* const currentCart = JSON.parse(context.req.cookies.products || '[]');

  const foundButterfly = productDatabase.find((butterfly) => {
    return butterfly.id === context.query.id;
  });
  // console.log(foundButterfly);

  const inCart = currentCart.find((object) => {
    return foundButterfly.id === object.id;
  });
  // console.log(inCart);

  const butterflyInCart = { ...foundButterfly, ...inCart };
  // console.log(butterflyInCart); */

  const product = await getProduct(context.query.id);
  return {
    props: {
      butterfly: product,
    },
  };
}
