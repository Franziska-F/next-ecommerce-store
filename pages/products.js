import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { css } from '@emotion/react';

import { getProducts } from '../util/database';

const main = css`
  background-color: #f6f5e8;
  margin: 0;
`;

const test = css`
  text-align: center;
  font-weight: lighter;
  color: #71716d;
  margin: 0;
  padding: 32px;
`;
const productWrapper = css`
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
  .single-product-wrapper {
    margin: 16px;
    padding: 12px;
  }

  .single-product-wrapper:hover {
    background-color: #e5e4d7;
  }

  .img-container {
    width: 400px;
    box-shadow: 5px 5px 5px lightgray;
  }
  .single-product-wrapper img {
    border-radius: 4px;
  }
  .single-product-wrapper a {
    text-decoration: none;
    color: #71716d;
  }
  .img-container:hover {
    width: 410px;
    height: 310px;
  }
  .text-container {
    text-align: center;
    padding: 16px;
    font-size: 20px;
    color: #71716d;
  }
`;

export default function AllProducts(props) {
  return (
    <>
      <Head>
        <title> The Butterflyshop || Porducts </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <main css={main}>
        <h1 css={test}>Products</h1>
        <div css={productWrapper}>
          {props.products.map((product) => {
            return (
              <div
                className="single-product-wrapper"
                key={`butterfly-${product.id}`}
              >
                <div className="img-container">
                  {' '}
                  <Link href={`/butterflies/${product.id}`}>
                    <a data-test-id={`product-${product.id}`}>
                      <Image
                        src={`/images/${product.id}.jpeg`}
                        width="400"
                        height="300"
                        layout="responsive"
                      />
                    </a>
                  </Link>
                </div>
                <div className="text-container">
                  <div>
                    {' '}
                    <Link
                      className="product-link"
                      href={`/butterflies/${product.id}`}
                    >
                      {product.name}
                    </Link>{' '}
                  </div>{' '}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}
