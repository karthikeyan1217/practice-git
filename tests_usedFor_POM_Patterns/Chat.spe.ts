import { test, expect, Browser } from '@playwright/test';


// test.beforeEach(async ({ browser, page }) => {
//     // Create a new context with the stored authentication state
//     const context = await browser.newContext({
//         storageState: './playwright/.auth/auth.json',
//     });

//     // Create a new page in the new context
//     const authenticatedPage = await context.newPage();

//     // Go to the app and verify the user is logged in
//     await authenticatedPage.goto('https://www.saucedemo.com');
//     await expect(authenticatedPage).toHaveURL('https://www.saucedemo.com/inventory.html');
//     await expect(authenticatedPage.locator('text=Swag Labs')).toBeVisible();

//     // Assign this authenticated page to the global `page` object
//     // This will be used in each test
//     page = authenticatedPage;
// });

test('should load the inventory page after login', async ({ browser }) => {
    // Now, use the page that has been set up with authentication
    const context = await browser.newContext({ storageState: './playwright/.auth/auth.json' });
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com")
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('text=Swag Labs')).toBeVisible();
});

    // test('should display the correct product on the inventory page', async ({ page }) => {
    //     // Interact with the page to verify the products are displayed correctly
    //     const productName = page.locator('.inventory_item_name');
    //     await expect(productName).toHaveText('Sauce Labs Backpack');
    // });


    // test('should add a product to the cart', async ({ page }) => {
    //     // Add a product to the cart and verify that it's added
    //     const addToCartButton = page.locator('.btn_inventory');
    //     await addToCartButton.first().click(); // Click on the first product's "Add to Cart" button

    //     const cartIcon = page.locator('.shopping_cart_link');
    //     await expect(cartIcon).toHaveText('1'); // Ensure that the cart now contains 1 item
    // });

    // test('should log out successfully', async ({ page }) => {
    //     // Log out from the application
    //     const menuButton = page.locator('.bm-burger-button');
    //     await menuButton.click();

    //     const logoutButton = page.locator('#logout_sidebar_link');
    //     await logoutButton.click();

    //     // Verify that we are back on the login page
    //     await expect(page).toHaveURL('https://www.saucedemo.com/');
    //     await expect(page.locator('#login-button')).toBeVisible();
    // });