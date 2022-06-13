import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { css } from '@emotion/react';

const title = css`
  text-align: center;
`;
const hero = css`
  background-color: #726a5c;
  display: flex;

  color: #f1f0e3;

  .content-section {
    max-width: 50%;
    display: flex;
    margin-left: 30px;
  }
  .hero-header {
    max-width: 75%;
    padding: 40px 40px;
  }
  .hero-header h1 {
    text-align: start;
    font-weight: lighter;
  }
  .hero-header p {
    padding-top: 30px;
  }
  .hero-link {
    padding-top: 20px;
  }
  .hero-link a {
    color: #f1f0e3;
    text-decoration: none;
    border: 1px solid #f1f0e3;
    padding: 16px;
    border-radius: 1px;
  }
  .hero-link a:hover {
    background-color: #f1f0e3;
    color: #7b7261;
  }
  .image-section {
    width: 100%;
  }
`;
const display = css`
  display: flex;
  background-color: #fffef2;
  justify-content: space-between;

  .gallery {
    padding-top: 160px;
    margin: 16px;
  }
  .gallery h2 {
    color: #71716d;
    font-size: 20px;
    font-weight: lighter;
    text-align: center;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title> The Butterflyshop || Home </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <div>
        <div css={hero}>
          <div className="content-section">
            <div className="hero-header">
              <h1 css={title}>Time to fly with natur</h1>
              <div className="hero-text">
                <p>
                  Get butterflies for your home and reconnect with nature and
                  bring beauty back in your life. Discover our hand-picked
                  butterflies and finde the ones that are right for you
                </p>
              </div>
              <div className="hero-link">
                {' '}
                <Link href="/products">Discover our products</Link>
              </div>
            </div>
          </div>
          <div className="image-section">
            <Image
              src="/images/hero-img.jpg"
              width="800"
              height="600"
              alt="Little white and brown butterfly sitting on a white flower"
              layout="responsive"
            />
          </div>
        </div>
        <section>
          <div css={display}>
            <div className="gallery">
              <Image
                src="/images/gallery-img.jpg"
                width="550"
                height="400"
                alt="swallowtail sitting on a flower in a meadow"
              />
              <h2>Butterflies</h2>
            </div>
            <div className="gallery">
              <Image src="/images/gallery01-img.jpg" width="550" height="400" />
              <h2>Moths</h2>
            </div>
            <div className="gallery">
              <Image
                src="/images/gallery02-img.jpg"
                width="550"
                height="400"
                alt="peacock-butterfly sitting on a pink and red flower"
              />
              <h2>Why a butterfly?</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
