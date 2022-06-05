import { config } from 'dotenv';
import postgres from 'postgres';

config();
const sql = postgres();

export async function getProducts() {
  const products = await sql`
 SELECT * FROM products
 `;
  return products;
}

export async function getProduct(id) {
  const [product] = await sql`
 SELECT * FROM products
 WHERE id = ${id}
 `;
  return product;
}

/* export const productDatabase = [
  {
    id: '1',
    name: 'The Cutie',
    type: 'Orange tip',
    description:
      'Cute little butterfly that is esay to please and will live only for 1-2 weeks, so not a hughe comittment and ideal for beginners. ',
    price: '299',
  },
  {
    id: '2',
    name: 'The Solid',
    type: 'Peacock butterfly',
    description:
      'Beautyful, adaptiv and with a long life span is the peacock the perfect butterfly for every occasion.',
    price: '499',
  },
  {
    id: '3',
    name: 'The Fancy',
    type: 'Swallowtail',
    description:
      'The prince among the butterflies, elegant, conspicuous and aristocratic, a special butterfly for a special person',
    price: '999',
  },
  {
    id: '4',
    name: 'The Dark',
    type: 'Viennese emperor',
    description:
      'Not up for the colorful stuff and bright days? Want a butterfly that has the size of bat? Than this dark, beautyful creature of the night is perfect for you. ',
    price: '1200',
  },
];

// Just notes for the actual database!

// table:

/* CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
    type varchar(50) NOT NULL,
    description varchar(500) NOT NULL,
    price varchar(30));

    INSERT INTO products (name, type, description, price)
    VALUES
    ('The Cutie', 'Orange tip', 'Cute little butterfly that is esay to please and will live only for 1-2 weeks, so not a hughe comittment and ideal for beginners.', '299'),
    ('The Solid', 'Peacock butterfly', 'Beautyful, adaptiv and with a long life span is the peacock the perfect butterfly for every occasion.', '499'),
    ('The Fancy', 'Swallowtail', 'The prince among the butterflies, elegant, conspicuous and aristocratic, a special butterfly for a special person',
    '999'),
   ('The Dark', 'Viennese emperor', 'Not up for the colorful stuff and bright days? Want a butterfly that has the size of bat? Than this dark, beautyful creature of the night is perfect for you.', '1200')
   */
