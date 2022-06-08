import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { css } from '@emotion/react';

const popup = css`
  width: 400px;
  background: lightcoral;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  text-align: center;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;

  .open-popup {
    visibility: visible;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default function Checkout() {
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <Head>
        <title> The Butterflyshop || Checkout </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <h1>Checkout</h1>
      <form>
        <div className="address-wrapper">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              data-test-id="checkout-first-name"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" data-test-id="checkout-last-name" required />
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
        </div>
        <div className="credit-card">
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
            <input id="date" data-test-id="checkout-expiration-date" required />
          </div>
          <div>
            <label htmlFor="security_code">Expiration date</label>
            <input
              id="security_code"
              data-test-id="checkout-security-code"
              required
            />
          </div>
        </div>{' '}
        <div>
          <button
            data-test-id="checkout-confirm-order"
            onClick={() => setSubmit(true)}
          >
            Confirm Order
          </button>
          <div css={popup} className="open-popup">
            <h2>Thank you for your order</h2>
            <Link href="/index">Back to homepage</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
