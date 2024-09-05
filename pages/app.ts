import { expect, Page } from "@playwright/test";
import HomePage from "./home.page";
import AbstractPage from "./abstract.page";

export class App extends AbstractPage {
  homePage: HomePage;

  constructor(protected page: Page) {
    super(page);
    this.homePage = new HomePage(page);
  }

  async openApp() {
    await this.page.goto(this.baseUrl);
    await this.waitForAllResponses();
    await this.checkTitle("Practice Software Testing - Toolshop - v5.0");
  }

  async getTitle() {
    return this.page.title();
  }

  async checkTitle(expectedTitle: string) {
    const title = await this.getTitle();
    expect(title).toBe(expectedTitle);
  }
}
