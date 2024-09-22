import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.navigateToLogin()
    await loginPage.login('luciciordia@gmail.com', 'micontraseña')
    await expect(page).toHaveURL('https://unapaginainventada.com/home')
});