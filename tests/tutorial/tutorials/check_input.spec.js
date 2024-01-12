import { test, expect } from "@playwright/test";

test("hard_soft", async function ({ page }) {
  await page.goto("https://itera-qa.azurewebsites.net/home/automation");

  //radio button;

  await page.locator("//input[@value='option2']").check();

  expect(await page.locator("//input[@value='option2']")).toBeChecked();
  expect(
    await page.locator("//input[@value='option2']").isChecked()
  ).toBeTruthy();
  // toBeFalsy()

  //check(), unchecked()
});
