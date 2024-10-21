import { Page, expect } from "@playwright/test";
import { FormLayoutPage } from "./formLayoutsPage";
import { NavigationPage } from "./navigationPage";
import { DatepickerPage } from "./datepickerPage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutsPage: FormLayoutPage;
  private readonly datePickerPage: DatepickerPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutsPage = new FormLayoutPage(this.page);
    this.datePickerPage = new DatepickerPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onFormLayoursPage() {
    return this.formLayoutsPage;
  }

  onDatepickerPage() {
    return this.datePickerPage;
  }
}
