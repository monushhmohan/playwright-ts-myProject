import { test, expect } from '@playwright/test';

test("Open home page and verify title", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
});

