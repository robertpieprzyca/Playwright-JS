exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.login_button =
      "button[class='button--toW5-square space--ml-2 button button--shape-circle button--type-primary button--mode-white']";
    this.username_input = "#loginModalForm-identity";
    this.password_input = "#loginModalForm-password";
    this.login_submit = "button[name='form_submit']";
    this.avatar = "img[alt='Awatar użytkownika Joao2115']";
    this.user_details = ".flex.flex--1.boxAlign-jc--all-c";
  }

  //login page
  async goto_login_page() {
    await this.page.goto("https://www.pepper.pl/dlaciebie");
  }

  async accept_cookies() {
    await this.page
      .getByRole("button", { name: "Akceptuj wszystkie" })
      .nth(1)
      .click();
    await this.page
      .getByRole("button", { name: "Akceptuj wszystkie" })
      .first()
      .click();
  }

  async login(username, password) {
    await this.page.locator(this.login_button).click();
    await this.page.locator(this.username_input).fill(username);
    await this.page.locator(this.password_input).fill(password);
    await this.page.locator(this.login_submit).click();
    await this.page.locator(this.avatar).waitFor({ state: "visible" });
  }
};
