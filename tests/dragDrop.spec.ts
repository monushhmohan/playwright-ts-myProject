import { test, expect } from '@playwright/test';
import{OpenURL} from '../base/openURL'

test('Drag and drop example', async ({ page }) => {
    const bc = new OpenURL(page)
    bc.navigateToURL();
    await page.getByRole('link', { name: 'Drag and Drop' }).click();
    const source = page.locator('#column-a');
    const target = page.locator('#column-b');

    // Perform drag and drop
    await source.dragTo(target);

    // Optional: Verify the result
    await expect(source).toHaveText('B');
    await expect(target).toHaveText('A');
});
