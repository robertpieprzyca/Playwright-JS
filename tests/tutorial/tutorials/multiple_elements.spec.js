import { test, expect } from "@playwright/test";

test("multiple_elements", async function ({ page }) {
  await page.goto("https://demoblaze.com");

  const links = await page.$$("a");

  for (const link of links) {
    const link_text = await link.textContent();
    console.log(link_text);
  }

  expect(links).toHaveLength(15);
});
