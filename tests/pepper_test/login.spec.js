import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/pepper_pages/login_page";

var username = "szyszkawidelec1@onet.pl";
var password = "Joao2115";

test("user_details", async function ({ page }) {
  const login_page = new LoginPage(page);

  await login_page.goto_login_page();

  await login_page.accept_cookies();

  await login_page.login(username, password);

  await page.locator(login_page.avatar).click();

  const user_details = page.locator(login_page.user_details);

  await expect(user_details).toHaveText("Joao2115");
});
