import { test, expect } from "@playwright/test";

test("record", async function ({ page }) {
  await page.goto("https://demo.opencart.com");
});
