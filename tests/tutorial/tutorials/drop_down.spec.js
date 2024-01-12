import { test, expect } from "@playwright/test";

test("drop_down", async function ({ page }) {
  await page.goto("https://testautomationpractice.blogspot.com");

  //await page.locator("#country").selectOption({label: "India" });
  //await page.locator("#country").selectOption({value: "india"}); value
  //await page.locator("#country").selectOption({index: 1}); index
  //await page.selectOption("#country", "India"); //visible test

  await page.locator("#country").selectOption("India"); //visible test

  //asserts

  const options = await page.locator("#country option");

  await expect(options).toHaveCount(10);

  // const content = await page.locator("#country").textContent();
  // await expect(content.includes("India")).toBeTruthy();

  const options_2 = await page.$$("#country option");

  await expect(options_2).toHaveLength(10);

  let status = false;

  for (const option of options_2) {
    let value = await option.textContent();
    if (value.includes("France")) {
      status = true;
      break;
    }
  }
  await expect(status).toBe(true);

  //page.waitForSelector
});
