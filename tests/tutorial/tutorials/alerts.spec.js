import { test, expect } from "@playwright/test";

test("alert", async function ({ page }) {
  await page.goto("https://testautomationpractice.blogspot.com");

  page.on("dialog", async (dialog) => {
    //enabling alert handling = dialog window handler

    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("//button[normalize-space()='Alert']");
});

test("confirmation_alert", async function ({ page }) {
  await page.goto("https://testautomationpractice.blogspot.com");

  page.on("dialog", async (dialog) => {
    //enabling alert handling = dialog window handler

    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    // await dialog.accept();  close by using OK
    await dialog.dismiss(); //close by using cancel
  });

  await page.click("//button[normalize-space()='Confirm Box']");

  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
});

test("prompt_dialog", async function ({ page }) {
  await page.goto("https://testautomationpractice.blogspot.com");

  page.on("dialog", async (dialog) => {
    //enabling alert handling = dialog window handler

    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");

    await dialog.accept("Anomander"); //accept by filling input
  });

  await page.click("//button[normalize-space()='Prompt']");

  await expect(page.locator("#demo")).toHaveText(
    "Hello Anomander! How are you today?"
  );
});
