import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByText("Forms").click();
  await page.getByText("Form layouts").click();
});

test("Locator syntax rules", async ({ page }) => {
  // by Tag name
  page.locator("input");

  // by id
  page.locator("#inputEmail");

  // by class value
  page.locator(".shape-rectangle");

  // by attribute
  page.locator('[placeholder="Email"]');

  // by class value full
  page.locator("[class='shape-rectangle']");

  // combine different locators
  page.locator('input[placeholder="Email"]');
});

test("User facing locators", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().click();
});
