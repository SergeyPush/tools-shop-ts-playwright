import { Page } from "@playwright/test";
import { BASE_URL } from "../config/get-env.config";

class AbstractPage {
  private baseUrl = BASE_URL;

  constructor(public page: Page) {}

  get getPage() {
    return this.page;
  }

  getCurrentUrl() {
    return this.page.url();
  }

  getCurrentPath() {
    const url = this.getCurrentUrl();
    return url.replace(this.baseUrl, "");
  }

  async waitForResponse(res: string = "/products") {
    await this.page.waitForResponse((response) => response.url().includes(res));
  }

  async waitForAllResponses() {
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForLoadState("load");
    await this.page.waitForLoadState("domcontentloaded");
  }

  async waitForUrl(path: string) {
    await this.getPage.waitForURL((url) => url.href.includes(path));
  }

  async navigateTo(path: string) {
    await this.page.goto(this.baseUrl + path);
    await this.waitForUrl(path);
  }
}
export default AbstractPage;
