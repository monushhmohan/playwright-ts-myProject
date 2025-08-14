import { test, expect } from '@playwright/test';
import { OpenURL } from '../base/openURL';
import { LandingPage } from '../pages/landingPage.spec';

test("Open home page and verify title", async ({ page }) => {
    const bc = new OpenURL(page)
    const landing = new LandingPage(page)
    
    await bc.navigateToURL();
    await landing.clickKeyPressesLink();
    await page.getByRole('heading', { name: 'Key Presses' }).click();
    await page.getByText('Key presses are often used to').click();
    await page.locator('#target').click();
    await page.keyboard.press('A');
    await page.getByText('You entered: A');
    await page.keyboard.press('B');
    await page.getByText('You entered: B').click();
    await page.keyboard.press('Backspace');
    await page.getByText('You entered: BACK_SPACE').click();
    await page.keyboard.press('Enter')
    await page.getByText('You entered: ENTER').click();
});

