import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/pepper_pages/login_page";
import { MainPage } from "../../pages/pepper_pages/main_page";

var username = "szyszkawidelec1@onet.pl";
var password = "Joao2115";
var product = "LEGO";
let context;
let page;

test.beforeEach("login", async function ({ browser }) {
  context = await browser.newContext();
  page = await context.newPage();
  const login_page = new LoginPage(page);

  await login_page.goto_login_page();

  await login_page.accept_cookies();

  await login_page.login(username, password);
});

test("filter", async function () {
  const main_page = new MainPage(page);

  await main_page.chose_new_filter("Śląskie");

  const number_of_active_filters = await page.locator(
    "span[class='button button--type-secondary button--mode-default button--shape-circle button--toW3-square aGrid overflow--visible subNavMenu-hide--menu-selected'] span[class='cept-selected-filter-count space--ml-1 circle--s subNavMenu-roundCounter-text aGrid-item--toW3 aGrid-item--t-n7 aGrid-item--r-n7 circle--xs--toW3 space--fromW3-ml-2 ']"
  );

  await expect(await number_of_active_filters).toHaveText("1");
});
