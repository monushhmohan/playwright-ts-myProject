import { test, expect } from '@playwright/test';
test.use({
    httpCredentials: {
        username: 'admin',
        password: 'admin',
    },
});
test("Verify Basic Auth functionality", async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.getByRole('heading', { name: 'Basic Auth' })).toBeVisible();
    await expect(page.getByText('Congratulations! You must')).toBeVisible();
});

