import Cookies from 'js-cookie';
import Head from 'next/head';

import { css } from '@emotion/react';

const body = css`
  background-color: #f6f5e8;
  margin: 0;
  width: 100vw;

  h1 {
    margin-top: 0;
    font-weight: lighter;
    color: #71716d;
    text-align: center;
    padding: 24px;
  }
`;

const addressWrapper = css`
  display: flex;
  justify-content: center;

  input {
    padding: 8px;
    width: 40vw;
    border-radius: 4px;
  }
  input,
  label {
    display: block;
    margin: 4px auto;
  }
  .name-container {
    margin: 32px;
  }
  button {
    cursor: pointer;
    background-color: #333333;
    color: white;
    width: 40vw;
    padding: 12px;
    border-radius: 4px;
    margin-top: 12px;
    font-size: 16px;
    box-shadow: 2px 2px 4px #a6a4a4;
    font-weight: 400;
  }
  button:hover {
    background-color: white;
    color: #333333;
    transition: ease-in-out;
  }
`;

export default function Checkout() {
  return (
    <div>
      <Head>
        <title> The Butterflyshop || Checkout </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <main css={body}>
        <h1>Checkout</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            Cookies.remove('cart');
            window.open('/thankyou', '_self');
          }}
        >
          <div css={addressWrapper}>
            <div className="name-container">
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  name="first_name"
                  data-test-id="checkout-first-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  data-test-id="checkout-last-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" data-test-id="checkout-email" required />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input id="address" data-test-id="checkout-address" required />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input id="city" data-test-id="checkout-city" required />
              </div>
              <div>
                <label htmlFor="postal_code">Postal Code</label>
                <input
                  id="postal_code"
                  data-test-id="checkout-postal-code"
                  required
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input id="country" data-test-id="checkout-country" required />
              </div>
              <div>
                <label htmlFor="credit-card">Credit card Number</label>
                <input
                  id="credit-card"
                  data-test-id="checkout-credit-card"
                  required
                />
              </div>
              <div>
                <label htmlFor="date">Expiration date</label>
                <input
                  id="date"
                  data-test-id="checkout-expiration-date"
                  required
                />
              </div>
              <div>
                <label htmlFor="security_code">Expiration date</label>
                <input
                  id="security_code"
                  data-test-id="checkout-security-code"
                  required
                />
              </div>{' '}
              <div>
                <button data-test-id="checkout-confirm-order">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
