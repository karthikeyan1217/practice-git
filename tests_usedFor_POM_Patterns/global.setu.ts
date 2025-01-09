//import { test, expect } from '@playwright/test'
import { test } from '../Fixtures/Pom_Fixtures'
import { expect } from '@playwright/test'

// test("Set-up", async ({ page }) => {
//     // await loginPage.openURL("https://www.saucedemo.com");
//     // await loginPage.loginApp('standard_user', "secret_sauce");
//     // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//     // await expect(page.getByText('Swag Labs')).toBeVisible();
//     // await loginPage.page.context().storageState({ path: './playwright/.auth/auth.json' })

//     await page.goto("https://www.saucedemo.com");
//     await page.locator("css=#user-name").fill('standard_user');
//     await page.locator("css=#password").fill("secret_sauce");
//     await page.locator("#login-button").click();
//     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//     await expect(page.getByText('Swag Labs')).toBeVisible();
//     await page.context().storageState({ path: './playwright/.auth/auth.json' })
// })


test('set up authentication state', async ({ page }) => {
    // Go to the login page
    await page.goto('https://www.saucedemo.com');

    // Log in using a valid user
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Wait for the login to complete and verify the page
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('text=Swag Labs')).toBeVisible();

    // Save the authentication state (cookies, localStorage, sessionStorage, etc.)
    await page.context().storageState({ path: './playwright/.auth/auth.json' });
});