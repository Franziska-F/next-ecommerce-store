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

// give it props
function MyApp({ Component, pageProps }) {
  // don't need it
  const [itemInCart, setItemInCart] = useState([]);

  useEffect(() => {
    const cartItem = Cookies.get('products')
      ? JSON.parse(Cookies.get('products'))
      : [];
    setItemInCart(cartItem);
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
      <Layout itemInCart={itemInCart} setItemInCart={setItemInCart}>
        <Component
          {...pageProps}
          itemInCart={itemInCart}
          setItemInCart={setItemInCart}
        />
        {/* Here is the output of the pages*/}
      </Layout>
    </>
  );
}

export default MyApp;

export function getInitialProps(context) {
  // get cookies here
}
