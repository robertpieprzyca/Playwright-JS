import { test, expect } from "@playwright/test";

test("test1@sanity", async function ({ page }) {
  await page.goto("https://demoblaze.com/");
});

test("test2@reg", async function ({ page }) {
  await page.goto("https://demoblaze.com/");
});

test("test3@sanity@reg", async function ({ page }) {
  await page.goto("https://demoblaze.com/");
});
