exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.product_list = "div [class='card-block'] h4 a";
    this.add_to_cart_button = ".btn.btn-success.btn-lg";
    this.cart = "#cartur";
  }

  async add_product_to_cart(product_name) {
    const product_list = await this.page.$$(this.product_list);
    for (const product of product_list) {
      if (product_name === (await product.textContent())) {
        await product.click();
        break;
      }
    }

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });

    await this.page.locator(this.add_to_cart_button).click();
  }

  async go_to_cart() {
    await this.page.locator(this.cart).click();
  }
};
