import {
  css,
  Global,
} from '@emotion/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            font-family: 'Poppins', sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />

      <Layout>
        <Component {...pageProps} /> {/* Here is the output of the pages*/}
      </Layout>
    </>
  );
}

export default MyApp;
