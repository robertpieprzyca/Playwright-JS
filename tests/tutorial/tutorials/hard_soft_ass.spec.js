import { test, expect } from "@playwright/test";

test("hard_soft", async function ({ page }) {
  await page.goto("https://demoblaze.com");

  //hard/soft assertions

  await expect.soft(page).toHaveTitle("XD");
  await expect(page).toHaveURL("https://demoblaze.com");
  const ui_button = await page.locator("//a[@id='nava']");
  await expect(ui_button).toBeVisible();
});
