import { test, expect, Browser, Page } from '@playwright/test'
import { LoginPage_page } from './Pages/LoginPage_page'

test("Verify the login page with POM pattern", async ({ page }) => {
    let loginPageObjectRef = new LoginPage_page(page);
    await loginPageObjectRef.openURL("https://www.saucedemo.com");
    await loginPageObjectRef.loginApp('standard_user', "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})
