import { test as baseTest } from "@playwright/test";
import { App } from "../pages/app";
import HomePage from "../pages/home.page";

type MyFixtures = {
  app: App;
  token: string;
  auth: App;
  home: HomePage;
};

export const test = baseTest.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await app.openApp();
    await use(app);
  },
  home: async ({ app }, use) => {
    const home = new HomePage(app.getPage);
    use(home);
  },
});
