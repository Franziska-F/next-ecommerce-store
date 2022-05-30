import {
  React,
  useState,
} from 'react';

import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';

import { css } from '@emotion/react';

import { productDatabase } from '../../util/database';

const wrapper = css`
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description p {
    line-height: 32px;
  }
`;

export default function ButterflyDetails(props) {
  const [isInCart, setIsInCart] = useState('count' in props.butterfly);
  const [count, setCount] = useState(props.butterfly.count || 1);

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

      <div css={wrapper}>
        <h1>{props.butterfly.name} </h1>

        <div>
          <Image
            src={`/images/${props.butterfly.id}.jpeg`}
            width="400"
            height="300"
          />
        </div>
        <br />
        <div>{props.butterfly.type}</div>
        <br />
        <div className="description">
          <p>{props.butterfly.description}</p>
        </div>
        <div>Price: {props.butterfly.price / 100} € </div>
        <div>
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
          </div>
          <button
            onClick={() => {
              const currentCart = Cookies.get('products') // is there a cookie with value 'product'?
                ? JSON.parse(Cookies.get('products'))
                : []; // if not, return empty array
              let newCart;

              // is product inside cart?

              if (
                currentCart.find(
                  (productsInCart) => props.butterfly.id === productsInCart.id,
                )
              ) {
                newCart = currentCart.map((obj) =>
                  obj.id === props.butterfly.id
                    ? { ...obj, count: obj.count + count }
                    : obj,
                );
                setCount(count);
                /* newCart = currentCart.filter((productsInCart) => {
                  return productsInCart.id !== props.butterfly.id;
                }); // if id is different, pass the filter
                setIsInCart(true);
                setCount(count); */
              } else {
                newCart = [
                  ...currentCart,
                  { id: props.butterfly.id, count: count },
                ];
                setIsInCart(true);
              }
              // update the cookie
              Cookies.set('products', JSON.stringify(newCart));
            }}
          >
            {' '}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const currentCart = JSON.parse(context.req.cookies.products || '[]');
  console.log(currentCart);
  const foundButterfly = productDatabase.find((butterfly) => {
    return butterfly.id === context.query.id;
  });

  const inCart = currentCart.find(
    (productsInCart) => foundButterfly.id === productsInCart.id,
  );

  const butterflyInCart = { ...foundButterfly, ...inCart };
  return {
    props: {
      butterfly: butterflyInCart || null,
    },
  };
}
