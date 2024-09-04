import { expect, Page } from "@playwright/test";
import { BASE_URL } from "../config/get-env.config";
import HomePage from "./home.page";

export class App {
  baseUrl = BASE_URL;
  homePage: HomePage;

  constructor(protected page: Page) {
    this.homePage = new HomePage(page);
  }

  async openApp() {
    await this.page.goto(this.baseUrl);
    await this.page.waitForLoadState();
    await this.page.waitForLoadState("networkidle");
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
