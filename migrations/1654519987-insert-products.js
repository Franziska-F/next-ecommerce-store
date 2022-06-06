const products = [
  {
    name: 'The Cutie',
    type: 'Orange tip',
    description:
      'Cute little butterfly that is esay to please and will live only for 1-2 weeks, so not a hughe comittment and ideal for beginners. ',
    price: '299',
  },
  {
    name: 'The Solid',
    type: 'Peacock butterfly',
    description:
      'Beautyful, adaptiv and with a long life span is the peacock the perfect butterfly for every occasion.',
    price: '499',
  },
  {
    name: 'The Fancy',
    type: 'Swallowtail',
    description:
      'The prince among the butterflies, elegant, conspicuous and aristocratic, a special butterfly for a special person',
    price: '999',
  },
  {
    name: 'The Dark',
    type: 'Viennese emperor',
    description:
      'Not up for the colorful stuff and bright days? Want a butterfly that has the size of bat? Than this dark, beautyful creature of the night is perfect for you. ',
    price: '1200',
  },
];

exports.up = async (sql) => {
  await sql`
	 INSERT INTO products ${sql(products, 'name', 'type', 'description', 'price')}
`;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
		DELETE FROM products
		WHERE 
		name = ${product.name} AND 
		type = ${product.type} AND
		description = ${product.description} AND
		price = ${product.price}`;
  }
};
