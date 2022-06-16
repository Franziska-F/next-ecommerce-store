const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  // Go to https://next-ecommerce-project.herokuapp.com/
  await page.goto('https://next-ecommerce-project.herokuapp.com/');
  // Click header >> text=Products
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://next-ecommerce-project.herokuapp.com/products' }*/),
    page.locator('header >> text=Products').click(),
  ]);
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://next-ecommerce-project.herokuapp.com/butterflies/1' }*/),
    page.locator('text=The Cutie').click(),
  ]);
  // Click [data-test-id="product-add-to-cart"]
  await page.locator('[data-test-id="product-add-to-cart"]').click();
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://next-ecommerce-project.herokuapp.com/cart' }*/),
    page.locator('text=Cart:').click(),
  ]);

  let cart = await page.$$(
    '[data-test-id="cart-product-quantity-\\<product id\\>"]',
  );
  await expect(cart.length).toBe(1);

  await Promise.all([
    page.waitForNavigation(/* { url: 'https://next-ecommerce-project.herokuapp.com/products' }*/),
    page.locator('text=Products').click(),
  ]);
  // Click text=The Solid
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://next-ecommerce-project.herokuapp.com/butterflies/2' }*/),
    page.locator('text=The Solid').click(),
  ]);
  // Click [data-test-id="product-add-to-cart"]
  await page.locator('[data-test-id="product-add-to-cart"]').click();
  // Click text=Cart:
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://next-ecommerce-project.herokuapp.com/cart' }*/),
    page.locator('text=Cart:').click(),
  ]);
  cart = await page.$$(
    '[data-test-id="cart-product-quantity-\\<product id\\>"]',
  );
  expect(cart.length).toBe(2);

  // Click text=The Solid Price: 4.99 € Quantity: 1 Remove >> [data-test-id="cart-product-remove-\<product id\>"]
  await page
    .locator(
      'text=The Solid Price: 4.99 € Quantity: 1 Remove >> [data-test-id="cart-product-remove-\\<product id\\>"]',
    )
    .click();
  cart = await page.$$(
    '[data-test-id="cart-product-quantity-\\<product id\\>"]',
  );
  expect(cart.length).toBe(1);
});
