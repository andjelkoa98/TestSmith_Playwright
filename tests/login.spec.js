import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login';

test('Login test', async ({ page }) => {

  const loginUser = new Login(page);

  await loginUser.login('aca@acaa.com', '1234567');

  await expect(page.locator('[data-test="page-title"]')).toBeVisible();

});