import { test, expect } from '@playwright/test';

test('Dropdown test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com');
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await expect(page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
    await page.locator('#dropdown').selectOption('2');
    await expect(page.locator('#dropdown')).toHaveValue('2');
})