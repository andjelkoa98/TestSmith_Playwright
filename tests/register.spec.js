import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test('Registering new user', async ({ page }) => {

    const newUser = new RegisterPage(page);
    
    await newUser.goToRegisterPage();

    await newUser.registerNewUser('Aca', 'Acic', '2000-07-21', 'asfd d sada', '11111', 'Beograd', 'asdasf', 'RS', '12331233', 'aca@acaa.com', '1234567');
    
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/#/auth/login');
   
});


// https://practicesoftwaretesting.com/#/auth/login