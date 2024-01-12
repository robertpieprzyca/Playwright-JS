import { test, expect } from "@playwright/test";

test("home page", async function ({ page }) {
  await page.goto("https://demoblaze.com/");

  await expect(page).toHaveTitle("STORE");

  await expect(page).toHaveURL("https://demoblaze.com/");

  await page.close();
});
