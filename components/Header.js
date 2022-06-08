import Link from 'next/link';

import { css } from '@emotion/react';

const header = css`
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  color: #f1f0e3;

  .links ul {
    display: flex;

    justify-content: space-evenly;
    list-style: none;
  }
  .links ul li {
    margin: 4px 8px;
  }
  .links ul a {
    cursor: pointer;
    color: #f1f0e3;
  }
  .links ul a:hover {
    font-size: 18px;
  }
  .cart {
    margin-right: 30px;
  }
`;

export default function Header(props) {
  console.log(props.currentCart);
  let totalItems = props.currentCart.reduce(function (prev, current) {
    return prev + current.count;
  }, 0);

  return (
    <header css={header}>
      <div className="links">
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>

          <li>
            <Link href="/products">Products </Link>
          </li>
        </ul>
      </div>

      <div className="cart">
        <span>{totalItems}</span>

        <Link href="/cart"> 🛒 </Link>
      </div>
    </header>
  );
}
