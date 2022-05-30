import Head from 'next/head';

import { css } from '@emotion/react';

const title = css`
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <titel>🦋 The Butterflyshop | Home</titel>
        <meta name="description" content="Shop for butterflies" />
      </Head>
      <div>
        <h1 css={title}>Welcome</h1>
      </div>
    </>
  );
}
