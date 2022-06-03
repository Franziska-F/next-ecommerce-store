import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { css } from '@emotion/react';

import { productDatabase } from '../util/database';

const test = css`
  text-align: center;
  font-weight: lighter;
  color: #71716d;
`;
const products = css`
  display: flex;
  padding: 40px;

  .product-wrapper img {
    border-radius: 4px;
  }
`;

export default function Products(props) {
  return (
    <>
      <Head>
        <titel>Products</titel>
        <meta name="description" content="List of avaliable butterflies" />
      </Head>{' '}
      <h1 css={test}>Products</h1>
      <div css={products}>
        <div className="product-wrapper">
          {props.products.map((product) => {
            return (
              <div key={`butterfly-${product.id}`}>
                <div>
                  {' '}
                  <Image
                    src={`/images/${product.id}.jpeg`}
                    width="400"
                    height="300"
                  />{' '}
                </div>
                <div>
                  {' '}
                  <Link href={`/butterflies/${product.id}`}>
                    {product.name}
                  </Link>{' '}
                </div>{' '}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      products: productDatabase,
    },
  };
}
