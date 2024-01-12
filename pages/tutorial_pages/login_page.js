exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.login_link = "#login2";
    this.username_input = "#loginusername";
    this.password_input = "#loginpassword";
    this.login_button = "button[onclick='logIn()']";
  }

  async goto_login_page() {
    await this.page.goto("https://demoblaze.com/index.html");
  }

  async login(username, password) {
    await this.page.locator(this.login_link).click();
    await this.page.locator(this.username_input).fill(username);
    await this.page.locator(this.password_input).fill(password);
    await this.page.locator(this.login_button).click();
    await this.page.waitForSelector("#logout2");
  }
};
