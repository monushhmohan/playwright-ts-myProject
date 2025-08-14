import { test, expect } from '@playwright/test'
import { OpenURL } from '../base/openURL'

test("Test title and page", async ({ page }) => {
    const bc = new OpenURL(page);
    await bc.navigateToURL();
    await expect(page).toHaveTitle("The Internet");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/");
});

test("Navigate to Forgot Password", async ({ page }) => {
    const bc = new OpenURL(page);
    await bc.navigateToURL();
    await page.getByRole("link", { name: 'Forgot Password' }).click();
    await expect(page.getByRole("button", { name: 'Retrieve password' })).toHaveText('Retrieve password');
    await expect(page.getByRole("heading", { level: 2 })).toContainText("Forgot");
}
);
test("Print all the links", async ({ page }) => {
    const bc = new OpenURL(page);
    await bc.navigateToURL();
    const texts = await page.getByRole('link').allInnerTexts();
    console.log(texts);
}
);
test('Test submit forgot passwed form', async ({ page }) => {
    const bc = new OpenURL(page);
    await bc.navigateToURL();
    await page.getByRole("link", { name: 'Forgot Password' }).click();
    await page.getByLabel('E-mail').fill('Playwright');
    await page.getByRole('button', { name: 'Retrieve password' }).click();
    await expect(page.getByText('Internal Server Error')).toBeVisible();
});

test('test homepage snapshot', async ({ page }) => {
    const bc = new OpenURL(page);
    await bc.navigateToURL();
    await expect(page).toHaveScreenshot('home.png', { fullPage: true });
});

