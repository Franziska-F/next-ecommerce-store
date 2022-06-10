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

// Props is an Array of objects, therefore the "[]"
type Props = {
  itemInCart: {
    id: number;
    count: number;
  }[];
};

export default function Header(props: Props) {
  console.log(props.itemInCart);
  // any is maybe not the best specification but "number" would not accept current.count...
  const totalItems = props.itemInCart.reduce(function (
    prev: number,
    current: any,
  ) {
    return prev + current.count;
  },
  0);

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
