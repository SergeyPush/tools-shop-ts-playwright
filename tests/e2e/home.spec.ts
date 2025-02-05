import { expect } from "@playwright/test";
import { test } from "../../config/config";

test.describe("Home Page Tests", () => {
  test("Should open home page", async ({ app }) => {
    const expectedTitle = "Practice Software Testing - Toolshop - v5.0";
    const title = await app.getTitle();
    expect(title).toBe(expectedTitle);
  });

  test("Should display all products @ui", async ({ home }) => {
    const allProducts = await home.getAllProductsText();
    expect(allProducts.length).toBe(9);
  });
});
