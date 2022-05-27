import Link from 'next/link';

import { css } from '@emotion/react';

const header = css`
  background-color: red;
  display: flex;
  justify-content: space-between;

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
  }
  .links ul a:hover {
    font-size: 18px;
    background-color: bisque;
  }
  .cart {
    margin-right: 30px;
  }
`;

export default function Header() {
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
        <Link href="/cart"> 🛒 </Link>
      </div>
    </header>
  );
}
