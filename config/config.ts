import { test as baseTest } from "@playwright/test";
import { App } from "../pages/app";

export const test = baseTest.extend({
  app: async ({ page }, use) => {
    const app = new App(page);
    await app.openApp();
    await use(app);
  },
});
