import { test, expect } from "@playwright/test";

test("asserts", async function ({ page }) {
  await page.goto("https://demo.nopcommerce.com/register");

  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  const logo = page.getByRole("link", { name: "nopCommerce demo store" });

  await expect(logo).toBeVisible();

  const search_box = page.getByPlaceholder("Search store");

  await expect(search_box).toBeEnabled();

  const male_checkbox = page.locator("#gender-male");

  await male_checkbox.click();

  await expect(male_checkbox).toBeChecked();

  const newsletter_checkbox = page.getByLabel("Newsletter:");

  await expect(newsletter_checkbox).toBeChecked();

  const register_button = page.getByRole("button", { name: "Register" });

  await expect(register_button).toHaveAttribute("name", "register-button");

  await expect(register_button).toHaveText("Register");

  const company_name = page.locator("//input[@id='Company']");

  await company_name.fill("wasko_da_gama");

  await expect(company_name).toHaveValue("wasko_da_gama");

  const option_days = page.$$("//select[@name='DateOfBirthDay']/option");

  expect((await option_days).length).toEqual(32);
  expect((await option_days).length).not.toEqual(33);
});
