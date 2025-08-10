import { Page } from '@playwright/test';

export class LandingPage {
    protected page: Page;
    constructor(page) {
        this.page = page;
    }
    async clickKeyPressesLink() {
        await this.page.getByRole('link', { name: 'Key Presses' }).click();
    }
}