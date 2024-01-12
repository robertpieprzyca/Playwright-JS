import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/pepper_pages/login_page";
import { MainPage } from "../../pages/pepper_pages/main_page";

var username = "szyszkawidelec1@onet.pl";
var password = "Joao2115";
let page;

test.beforeEach("login", async function ({ browser }) {
  page = await browser.newPage();
  const login_page = new LoginPage(page);

  await login_page.goto_login_page();

  await login_page.accept_cookies();

  await login_page.login(username, password);
});

test("menu_main_links", async function () {
  const main_page = new MainPage(page);

  // Strona główna/Wszystkie

  await main_page.menu();

  await main_page.goto_main_page();

  await page.waitForURL("https://www.pepper.pl/dlaciebie");

  let title_of_page = await page.title();

  expect(title_of_page).toContain(
    "Pepper.pl - Najlepsze Okazje, Rabaty, Promocje i Błędy Cenowe"
  );

  // Dyskusje

  await main_page.menu();

  await main_page.goto_discuss();

  await page.waitForURL("https://www.pepper.pl/dyskusji");

  title_of_page = await page.title();

  expect(title_of_page).toContain(
    "Dyskusje na Pepper.pl - opinie o sklepach, recenzje, porady zakupowe"
  );

  // Wszystkie kategorie

  await main_page.menu();

  await main_page.goto_all_categories();

  await page.waitForURL("https://www.pepper.pl/grupa");

  title_of_page = await page.title();

  expect(title_of_page).toContain("Przegląd Kategorii");

  // Kupony

  await main_page.menu();

  await main_page.goto_coupons();

  await page.waitForURL("https://www.pepper.pl/kupony");

  title_of_page = await page.title();

  expect(title_of_page).toContain(
    "Najlepsze kody rabatowe i promocje ➜ Oszczędzaj z pepper.pl!"
  );
});

test("categories_coupons_links", async function () {
  const main_page = new MainPage(page);

  // All categories links

  await main_page.menu();

  const category_list = await main_page.all_categories_list();

  for (const category of await category_list) {
    await expect(category).toHaveAttribute("href");
  }

  // All coupons links

  const coupons_list = await main_page.all_coupons_list();

  for (const coupon of await coupons_list) {
    await expect(coupon).toHaveAttribute("href");
  }
});
