exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.no_of_products = "//tbody/tr/td[2]";
  }

  async check_product_in_cart(product_name) {
    await this.page.waitForSelector(this.no_of_products);
    const products_in_cart = await this.page.$$(this.no_of_products);
    for (const product of products_in_cart) {
      if (product_name === (await product.textContent())) {
        return true;
      }
    }
  }
};
