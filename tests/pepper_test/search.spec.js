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

test("search", async function () {
  const main_page = new MainPage(page);

  await main_page.search(product);

  const search_text = await page.locator(
    ".cept-nav-subheadline.size--all-xl.size--fromW3-xxl.text--b"
  );

  await expect(await search_text).toContainText(product);

  await main_page.goto_article();

  await context.waitForEvent("page");

  expect(await context.pages()).toHaveLength(2);
});
