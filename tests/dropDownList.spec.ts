import { test, expect } from '@playwright/test';
import { OpenURL } from '../base/openURL';

test('Dropdown test', async ({ page }) => {
    const bc = new OpenURL(page)
    bc.navigateToURL();
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await expect(page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
    await page.locator('#dropdown').selectOption('2');
    await expect(page.locator('#dropdown')).toHaveValue('2');
})