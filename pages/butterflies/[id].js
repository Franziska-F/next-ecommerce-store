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
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundButterfly = productDatabase.find((butterfly) => {
    return butterfly.id === context.query.id;
  });
  if (!foundButterfly) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      butterfly: foundButterfly || null,
    },
  };
}
