import { expect, test } from "@playwright/test";
import { Url, subscribeButton } from "./uiPage";

test.describe("Validate UI Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(Url);
  });
  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Polestar/);
  });

  test("Validation of subscribe button", async ({ page }) => {
    await page.locator(subscribeButton).isVisible();
  });
});
