import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>Oh no...</h1>
      <h2>No butterflies here...</h2>
      <div>🦋</div>
      <Link href="/">
        <a>Back to homepage</a>
      </Link>
    </div>
  );
}
