import { test, expect } from "@playwright/test";

test.beforeAll(async function () {
  console.log("before all hook");
});

test.beforeEach(async function () {
  console.log("before each hook");
});

test.describe.skip("group1", function () {
  test("grouping_1", async function ({ page }) {
    console.log("test1");
  });

  test("grouping_2", async function ({ page }) {
    console.log("test2");
  });
});

test.describe("group2", function () {
  test("grouping_3", async function ({ page }) {
    console.log("test3");
  });

  test("grouping_4", async function ({ page }) {
    console.log("test4");
  });
});
