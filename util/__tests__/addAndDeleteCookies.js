import Cookies from 'js-cookie';

test('set, get and delete a cookie', () => {
  const cookie = {
    key: 'products',
    value: [{ id: 1, count: 1 }],
  };
  expect(JSON.parse(Cookies.get(cookie))).toBe(undefined);

  expect(() =>
    Cookies.set(cookie.key, JSON.stringify(cookie.value)).not.toThrow(),
  );

  expect(Cookies.remove(cookie.key)).toBe(undefined);
});
