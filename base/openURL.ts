import { Page } from "@playwright/test";

export class OpenURL {
  protected page: Page;
  protected baseUrl: string;

  constructor(page) {
    this.page = page;
    this.baseUrl = 'https://the-internet.herokuapp.com/'
  }

  async navigateToURL(path: string = "") {
    await this.page.goto(`${this.baseUrl}/${path}`);
  }
}
