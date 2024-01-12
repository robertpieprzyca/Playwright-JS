import { test, expect } from "@playwright/test";

//before all
//after all
//begore each
//after each

let page;

test.beforeEach(async function ({ browser }) {
  page = await browser.newPage();

  await page.goto("https://demoblaze.com");

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("pavanol");

  await page.locator("#loginpassword").fill("test@123");

  await page.locator("button[onclick='logIn()']").click();

  await page.waitForSelector("#logout2");
});

test.afterEach(async function () {
  await page.locator("#logout2").click();

  await page.waitForSelector("#login2");
});

test("home_page", async function () {
  const products = await page.locator("div[class='card h-100']");

  expect(products).toHaveCount(9);
});

test("add_product", async function () {
  const product = await page.$("div[class='card h-100']");

  await product.click();

  await page.locator(" .btn.btn-success.btn-lg").click();

  page.on("dialog", async (dialog) => {
    //enabling alert handling = dialog window handler

    expect(dialog.message()).toContain("Produggggct added.");
    await dialog.accept();
  });
});
