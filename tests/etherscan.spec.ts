import { test, expect } from "@playwright/test";

test("Try to register", async ({ page }) => {
  await page.goto("https://etherscan.io/register");
  await page
    .locator("#ContentPlaceHolder1_txtUserName")
    .fill("TestUsername123");
  await page.locator("#ContentPlaceHolder1_txtEmail").fill("tvrdiqa@gmail.com");
  await page
    .locator("#ContentPlaceHolder1_txtConfirmEmail")
    .fill("tvrdiqa@gmail.com");
  await page
    .locator("#ContentPlaceHolder1_txtPassword")
    .fill("5btsv5iMag6A!YY");
  await page
    .locator("#ContentPlaceHolder1_txtPassword")
    .fill("5btsv5iMag6A!YY");

  await page
    .locator("#ContentPlaceHolder1_txtPassword2")
    .fill("5btsv5iMag6A!YY");
  await page.locator("#ContentPlaceHolder1_MyCheckBox").check();
  await page.locator("#ContentPlaceHolder1_btnRegister").click();
});
