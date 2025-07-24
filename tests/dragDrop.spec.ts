import { test, expect } from '@playwright/test';

test('Drag and drop example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  const source = page.locator('#column-a');
  const target = page.locator('#column-b');

  // Perform drag and drop
  await source.dragTo(target);

  // Optional: Verify the result
  await expect(source).toHaveText('B');
  await expect(target).toHaveText('A');
});
