import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to category pages', async ({ page }) => {
    await page.goto('/en/c/mens-clothing/suits');

    await expect(page.locator('h1')).toContainText('Sub Category Page');
  });

  test('should navigate to product pages', async ({ page }) => {
    await page.goto('/en/p/test-product');

    // Check if product page loads
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to shop pages', async ({ page }) => {
    await page.goto('/en/shop/gift-cards-for-men');

    await expect(page.locator('h1')).toContainText('Gift Cards for Men');
  });

  test('should navigate to contact us page', async ({ page }) => {
    await page.goto('/en/slc/contact-us');

    await expect(page.locator('h1')).toContainText('Contact Us');
  });
});
