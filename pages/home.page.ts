import { Page } from "@playwright/test";

class HomePage {
  private productList = this.page.locator("a.card");
  private cardTitle = this.productList.locator(".card-title");

  constructor(public page: Page) {}

  async getAllProductsText() {
    return this.cardTitle.allInnerTexts();
  }
}

export default HomePage;
