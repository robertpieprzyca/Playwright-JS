import { test, expect } from "@playwright/test";

test("file", async function ({ page }) {
  await page.goto("https://www.filemail.com/share/upload-file");

  await page
    .locator("label[id='addBtn'] input")
    .setInputFiles("tests/files/file_1.pdf");
});

test("multiple_files", async function ({ page }) {
  await page.goto("https://www.filemail.com/share/upload-file");

  await page
    .locator("label[id='addBtn'] input")
    .setInputFiles(["tests/files/file_1.pdf", "tests/files/file_2.pdf"]);
});
