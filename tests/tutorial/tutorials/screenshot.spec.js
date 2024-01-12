import { test, expect } from "@playwright/test";

test("page_ss", async function ({ page }) {
  await page.goto("https://demo.opencart.com");
  await page.screenshot({ path: "tests/ss/" + Date.now() + "homepage.png" });
});

test("fullpage_ss", async function ({ page }) {
  await page.goto("https://demo.opencart.com");
  await page.screenshot({
    path: "tests/ss/" + Date.now() + "fullpage.png",
    fullPage: true,
  });
});

test("locator_ss", async function ({ page }) {
  await page.goto("https://demo.opencart.com");
  await page
    .locator(
      "body > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1)"
    )
    .screenshot({ path: "tests/ss/" + Date.now() + "locator.png" });
});
