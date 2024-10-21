import { test } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Navigate to form page", async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datePickerPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test("Parametrized methods", async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm
    .onFormLayoursPage()
    .submitUsingTheGridFormWithCredentialsAndSelectorOption(
      "test@test.com",
      "Welcome1",
      "Option 1"
    );
  await pm
    .onFormLayoursPage()
    .submitInlineFormWithNameEmailAndCheckbox(
      "Aleksa Tvrdisic",
      "aleksa@test.com",
      false
    );
  await pm.navigateTo().datePickerPage();
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5);
  // await onDatepickerPage.selectDatepickerWithRangeFromToday(6, 15);
});
