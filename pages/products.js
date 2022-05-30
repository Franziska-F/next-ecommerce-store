import Head from 'next/head';
import Link from 'next/link';

import { css } from '@emotion/react';

import { productDatabase } from '../util/database';

const test = css`
  text-align: center;
`;

export default function Products(props) {
  return (
    <>
      <Head>
        <titel>Products</titel>
        <meta name="description" content="List of avaliable butterflies" />
      </Head>
      <div>
        <h1 css={test}>Products</h1>

        <div className="product-wrapper">
          {props.products.map((product) => {
            return (
              <div key={`butterfly-${product.id}`}>
                <div>
                  Name:{' '}
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
