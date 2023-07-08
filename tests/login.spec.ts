import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .locator("div")
    .filter({ hasText: /^Username$/ })
    .click();
  await page.getByPlaceholder("Username").fill("admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("Test1234#");
  await page.getByRole("button", { name: "Login" }).click();
});
