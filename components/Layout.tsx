import Header from './Header';

type Props = {
  itemInCart: {
    id: number;
    count: number;
  }[];
  children?: React.ReactNode;
  setItemInCart: any;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Header
        itemInCart={props.itemInCart}
        setItemInCart={props.setItemInCart}
      />
      {props.children} {/* all the content of the page */}
    </div>
  );
}
