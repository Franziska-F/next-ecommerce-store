import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header currentCart={props.currentCart} />
      {props.children} {/* all the content of the page */}
    </div>
  );
}
