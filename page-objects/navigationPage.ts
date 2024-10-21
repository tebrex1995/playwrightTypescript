import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }
  async formLayoutsPage() {
    await this.selectGroupMenuItem("Forms");
    await this.page.getByText("Form layouts").click();
    await this.waitForNumberOfSeconds(4);
  }

  async datePickerPage() {
    await this.selectGroupMenuItem("Forms");
    await this.page.getByText("Datepicker").click();
  }

  async smartTablePage() {
    await this.page.getByText("Tables & Data").click();
    await this.page.getByText("Smart Table").click();
  }

  async toastrPage() {
    await this.page.getByText("Modal & Overlays").click();
    await this.page.getByText("Toastr").click();
  }

  async tooltipPage() {
    await this.page.getByText("Modal & Overlays").click();
    await this.page.getByText("Tooltip").click();
  }

  private async selectGroupMenuItem(groupItemTitle: string) {
    const groupMenuItem = this.page.getByTitle(groupItemTitle);
    const expandedState = groupMenuItem.getAttribute("aria-expanded");
    if ((await expandedState) == "false") {
      await groupMenuItem.click();
    }
  }
}
