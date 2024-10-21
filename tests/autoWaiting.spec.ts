import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://uitestingplayground.com/ajax");
  await page.getByText("Button Triggering AJAX Request").click();
});

test("Auto waiting", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  // await successButton.click();

  const text = await successButton.textContent();
  expect(text).toEqual("Data loaded with AJAX get request.");

  await expect(successButton).toHaveText("Data loaded with AJAX get request.");
});

test("Alternative waits", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  // __ Wait for element
  // await page.waitForSelector(".bg-success");

  //__ Wait for particular response

  await page.waitForResponse("http://uitestingplayground.com/ajaxdata");

  //__Wait for network calls to be completed ('NOT RECOMMENDED')
  await page.waitForLoadState("networkidle");

  const text = await successButton.textContent();
  expect(text).toContain("Data loaded with AJAX get request.");
});

test("Timeouts", async ({ page }) => {
  test.slow();
  const successButton = page.locator(".bg-success");
  await successButton.click();
});
