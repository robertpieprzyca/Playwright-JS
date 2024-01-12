import { test, expect, chromium } from "@playwright/test";
import exp from "constants";

test("multiple_pages", async function () {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const all_pages = context.pages();

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page1).toHaveTitle("OrangeHRM");

  await page2.goto("https://www.orangehrm.com");

  await expect(page2).toHaveTitle("OrangeHRM HR Software | OrangeHRM");
});

test.only("multiple_pages_windows", async function () {
  const browser = await chromium.launch();

  const context = await browser.newContext();

  const page1 = await context.newPage();

  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page1).toHaveTitle("OrangeHRM");

  const page_promise = context.waitForEvent("page");

  await page1.locator("a[href='http://www.orangehrm.com']").click();

  const new_page = await page_promise;

  await expect(new_page).toHaveTitle("OrangeHRM HR Software | OrangeHRM");
});
