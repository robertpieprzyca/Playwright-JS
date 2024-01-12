import { test, expect } from "@playwright/test";

test("locators", async function ({ page }) {
  await page.goto("https://demoblaze.com/");

  await page.getByRole("link", { name: "Log in" }).click();

  await page.fill("#loginusername", "pavanol");

  await page.fill("#loginpassword", "test@123");

  await page.getByRole("button", { name: "Log in" }).click();

  let log_out_button = page.getByRole("link", { name: "Log out" });

  await expect(log_out_button).toBeVisible();

  await page.close();
});
