import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login';

test('test', async ({ page }) => {


    const loginUser = new Login(page);


    await loginUser.login('aca@acaa.com', '1234567');

    await page.locator('[data-test="nav-home"]').click();
    await page.locator('[data-test="product-1"]').click();
    await page.locator('[data-test="add-to-favorites"]').click();
    await page.locator('[data-test="nav-user-menu"]').click();
    await page.locator('[data-test="nav-my-favorites"]').click();
    expect(page.locator('[data-test="favorite-1"]')).toBeVisible();
    
    // await page.pause();
});