import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header
        itemInCart={props.itemInCart}
        setItemInCart={props.setItemInCart}
      />
      {props.children} {/* all the content of the page */}
      <Footer />{' '}
    </div>
  );
}
