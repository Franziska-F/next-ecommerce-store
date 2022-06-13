import Head from 'next/head';
import Link from 'next/link';

export default function Thankyou() {
  return (
    <div>
      <Head>
        <title> The Butterflyshop || Thank you for your order </title>
        <meta name="description" content="A shop for the best butterflies" />
      </Head>
      <h2>Thank you!</h2> <Link href="index">Back to homepage</Link>
    </div>
  );
}
