import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/en');

    // Check if the page title is visible
    await expect(page.locator('h1')).toBeVisible();

    // Check if the welcome message is displayed
    await expect(page.locator('h1')).toContainText('Welcome to TB Discovery');
  });

  test('should have correct page title', async ({ page }) => {
    await page.goto('/en');

    await expect(page).toHaveTitle(/TB Catalog/);
  });
});
