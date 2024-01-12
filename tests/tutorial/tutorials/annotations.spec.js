import { test, expect } from "@playwright/test";

//only
// test.only("test1", async function ({ page }) {

//   await page.goto("https://demoblaze.com/");

// });

test.skip("test2", async function ({ page }) {
  await page.goto("https://demoblaze.com/");
});

//

// test("test3", async function ({ page, browserName }) {
//   if (browserName === "chromium") {
//     test.skip;
//   }
//   await page.goto("https://demoblaze.com/");
// });

//fixme

test("test4", async function ({ page }) {
  test.fixme();
  await page.goto("https://demoblaze.com/");
});

//fail

test("test5", async function ({ page }) {
  test.fail(); //expected
  await page.goto("https://demoblaze.com/");
  await expect(2).toBe(1); //actually if act and exp are failed then test is passed
});

//slow

test("test6", async function ({ page }) {
  test.slow;
  await page.goto("https://demoblaze.com/");
});
