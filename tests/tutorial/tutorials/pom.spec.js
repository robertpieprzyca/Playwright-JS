import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/tutorial_pages/login_page";
import { HomePage } from "../../pages/tutorial_pages/home_page";
import { CartPage } from "../../pages/tutorial_pages/cart_page";

test("test", async function ({ page }) {
  //login
  const login = new LoginPage(page);
  await login.goto_login_page();
  await login.login("pavanol", "test@123");

  //home

  const home = new HomePage(page);
  await home.add_product_to_cart("Nexus 6");
  await home.go_to_cart();

  //cart

  const cart = new CartPage(page);
  const status = await cart.check_product_in_cart("Nexus 6");
  expect(await status).toBeTruthy();
});
