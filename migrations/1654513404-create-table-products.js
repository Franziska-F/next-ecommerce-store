exports.up = async (sql) => {
  await sql`
CREATE TABLE products (
  	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  	name varchar(30) NOT NULL,
	type varchar(50) NOT NULL,
    description varchar(500) NOT NULL,
    price varchar(30))`;
};
exports.down = async (sql) => {
  await sql`
	DROP TABLE products`;
};
