exports.MainPage = class MainPage {
  constructor(page) {
    this.page = page;
    this.avatar = "img[alt='Awatar użytkownika Joao2115']";
    this.menu_button = ".navMenu-page.nav-link-text.vAlign--all-m";
    this.menu_tab = "nav[data-t='mainMenu']";
    this.strona_glowna_link = "//a[contains(text(),'Strona główna /')]";
    this.dyskusje_link = "//a[normalize-space()='Dyskusje']";
    this.wszystkie_kategorie_link =
      "//a[normalize-space()='Wszystkie kategorie']";
    this.kupony_link = "//a[normalize-space()='Kupony']";
    this.category_list =
      "ul[class='navMenu-list size--all-m'] a[data-t='groupLink']";
    this.coupons_list =
      "ul[class='navMenu-list size--all-m'] a[data-t='merchantLink']";
    this.search_input = "input[placeholder='Szukaj...']";
    this.go_to_article =
      "(//span[@class='hide--toW3'][contains(text(),'Idź do okazji')])[1]";
    this.filter =
      ".button.button--type-secondary.button--mode-default.button--shape-circle.button--toW3-square.aGrid.overflow--visible.subNavMenu-hide--menu-selected";
    this.cancel_filter = "button[class='input-btn flex boxAlign-center']";
    this.chose_filter = ".input-label.size--all-s.mute--text";
    this.unclick_filter = ".input-label.size--all-s";
    this.save_filter = "button[type='submit']";
  }

  async menu() {
    await this.page.locator(this.menu_button).click();
    await this.page.locator(this.menu_tab).waitFor({ state: "visible" });
    await this.page.locator(
      "ul[class='navMenu-list size--all-m'] a[data-t='groupLink']"
    );
  }
  async goto_main_page() {
    await this.page.locator(this.strona_glowna_link).click();
    await this.page.waitForURL("https://www.pepper.pl/dlaciebie");
  }
  async goto_discuss() {
    await this.page.locator(this.dyskusje_link).click();
    await this.page.waitForURL("https://www.pepper.pl/dyskusji");
  }
  async goto_all_categories() {
    await this.page.locator(this.wszystkie_kategorie_link).click();
    await this.page.waitForURL("https://www.pepper.pl/grupa");
  }
  async goto_coupons() {
    await this.page.locator(this.kupony_link).click();
    await this.page.waitForURL("https://www.pepper.pl/kupony");
  }
  async all_categories_list() {
    await this.page.locator(this.category_list);
    return await this.page.locator(this.category_list).all();
  }
  async all_coupons_list() {
    await this.page.locator(this.coupons_list);
    return await this.page.locator(this.coupons_list).all();
  }
  async search(product) {
    await this.page.locator(this.search_input).fill(product);
    await this.page.keyboard.press("Enter");
    await this.page.waitForURL(
      "https://www.pepper.pl/search?q=" + product + ""
    );
  }
  async goto_article() {
    await this.page.locator(this.go_to_article).click();
  }
  async chose_new_filter(region) {
    await this.page.locator(this.filter).click();
    await this.page.locator(this.cancel_filter).click();
    await this.page.locator(this.chose_filter).click();
    await this.page
      .locator("//span[contains(text(),'" + region + "')]")
      .click();
    await this.page.locator(this.unclick_filter).click();
    await this.page.locator(this.save_filter).click();
  }
};
