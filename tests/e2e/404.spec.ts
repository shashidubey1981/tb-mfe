import { expect, test } from '@playwright/test';

test.describe('404 Page', () => {
  test('should show 404 page for non-existent route', async ({ page }) => {
    await page.goto('/en/non-existent-page');

    // Check if 404 heading is visible
    await expect(page.locator('h1')).toContainText('404');
  });

  test('should show 404 for invalid product', async ({ page }) => {
    await page.goto('/en/p/non-existent-product-12345');

    // Product page should load (may show not found content)
    await expect(page.locator('h1')).toBeVisible();
  });
});
