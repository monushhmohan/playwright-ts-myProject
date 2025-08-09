import { test, expect } from '@playwright/test';
import { OpenURL } from '../base/openURL';


test("Open home page and verify title", async ({ page }) => {
    const bc = new OpenURL(page)
    bc.navigateToURL();
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Available Examples' })).toBeVisible();
});

