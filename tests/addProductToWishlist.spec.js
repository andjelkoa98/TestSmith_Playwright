import { test, expect } from '@playwright/test';
import { Login } from '../pages/Login';
import { WishList } from '../pages/WishList';

test('Adding product to favorites list', async ({ page }) => {

    const loginUser = new Login(page);
    const list = new WishList(page);

    await loginUser.login('aca@acaa.com', '1234567');
    await list.AddToList();

    expect(page.locator('[data-test="favorite-1"]')).toBeVisible();
    
});