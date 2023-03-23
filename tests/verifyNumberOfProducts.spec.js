import { test, expect } from '@playwright/test';
import { VerifyProducts } from '../pages/VerifyProducts';

test('Testing is checking proces is valid', async ({ page }) => {
    const product = new VerifyProducts(page);


    await product.goToProducts();
    await product.checkDrillProducts();

    expect(product.beforeCheck).toBeGreaterThan(product.afterCheck);
});