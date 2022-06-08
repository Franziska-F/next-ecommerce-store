import {
  useEffect,
  useState,
} from 'react';

import Cookies from 'js-cookie';

import {
  css,
  Global,
} from '@emotion/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [currentCart, setCurrentCart] = useState([]);
  useEffect(() => {
    const cartItem = Cookies.get('products')
      ? JSON.parse(Cookies.get('products'))
      : [];
    setCurrentCart(cartItem);
  }, []);

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
      {/*} {*/}
      <Layout currentCart={currentCart}>
        <Component {...pageProps} />
        {/* Here is the output of the pages*/}
      </Layout>
    </>
  );
}

export default MyApp;
