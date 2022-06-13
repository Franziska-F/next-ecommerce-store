import { css } from '@emotion/react';

const footer = css`
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  color: #f1f0e3;
  padding-top: 48px;
  flex-direction: column;
  ul {
    list-style: none;

    display: flex;

    justify-content: space-evenly;
    gap: 40px;
  }
  li {
  }
  .copyright {
    border-top: solid 2px #f1f0e3;
    padding-top: 48px;
    padding-bottom: 56px;
    padding-left: 32px;
  }
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <div className="link-container">
        <ul>
          <li className="footer-link">About</li>
          <li className="footer-link">FAQ</li>
          <li className="footer-link">Contact us</li>
        </ul>
      </div>
      <div className="copyright">
        <span>© 2022 THe Butterflyshop</span>
      </div>
    </footer>
  );
}
