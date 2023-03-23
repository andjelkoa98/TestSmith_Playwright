import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/#/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('aca@acaa.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('1234567');
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="page-title"]')).toBeVisible();
});