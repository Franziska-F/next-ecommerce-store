import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <Head>
        <title> The Butterflyshop || Oh no! </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <h1>Oh no...</h1>
      <h2>No butterflies here...</h2>
      <div>🦋</div>
      <Link href="/">
        <a>Back to homepage</a>
      </Link>
    </div>
  );
}
