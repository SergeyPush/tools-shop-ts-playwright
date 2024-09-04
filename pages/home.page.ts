import { Page } from "@playwright/test";
import AbstractPage from "./abstract.page";

class HomePage extends AbstractPage {
  constructor(public page: Page) {
    super(page);
  }
}

export default HomePage;
