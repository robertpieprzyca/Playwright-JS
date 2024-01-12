import { test, expect } from "@playwright/test";

test("web_table", async function ({ page }) {
  await page.goto("https://testautomationpractice.blogspot.com");

  const table = await page.locator("#productTable");

  //total number of rows and columns

  const columns = await table.locator("thead tr th");

  expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");

  expect(await rows.count()).toBe(5);

  //checkbox for product 4

  // const matched_row = rows.filter({
  //   has: page.locator("td"),
  //   hasText: "Product 4",
  // });

  //await matched_row.locator("input").check();

  // multiple products by function

  await select_product(rows, page, "Product 1");
  await select_product(rows, page, "Product 2");
  await select_product(rows, page, "Product 5");

  // get all data from table in loops

  for (let r = 0; r < (await rows.count()); r = r + 1) {
    const row = rows.nth(r);

    const tds = row.locator("td");

    for (let c = 0; c < (await tds.count()); c = c + 1) {
      console.log(await tds.nth(c).textContent());
    }
  }
});

async function select_product(rows, page, name) {
  const matched_row = rows.filter({ has: page.locator("td"), hasText: name });

  await matched_row.locator("input").check();
}
