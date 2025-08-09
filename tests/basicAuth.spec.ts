import { test, expect } from '@playwright/test';
import { OpenURL } from '../base/openURL';
test.use({
    httpCredentials: {
        username: 'admin',
        password: 'admin',
    },
});
test("Verify Basic Auth functionality", async ({ page }) => {
    const bc = new OpenURL(page)
    bc.navigateToURL();
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.getByRole('heading', { name: 'Basic Auth' })).toBeVisible();
    await expect(page.getByText('Congratulations! You must')).toBeVisible();
});

