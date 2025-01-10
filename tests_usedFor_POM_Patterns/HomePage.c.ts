import { Locator, Page, expect } from '@playwright/test'
import { test } from '../Fixtures/Pom_Fixtures'
import { beforeEach } from 'node:test';



test.beforeEach('before each', async ({ page, loginPage }) => {
    await page.goto("https://www.saucedemo.com");
    // await loginPage.loginApp('standard_user', "secret_sauce");
    // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    // await expect(page.getByText('Swag Labs')).toBeVisible();

})

test('Validate the product', async ({ page, loginPage, homePage, yourCart }) => {

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText('Swag Labs')).toBeVisible();

    // await loginPage.openURL("https://www.saucedemo.com");
    // await loginPage.loginApp('standard_user', 'secret_sauce');


    /*h**
    await homePage.selectTheProductByUsingName("Sauce Labs Bolt T-Shirt");
    expect(homePage.verifySelectedprouctIsMatching("Sauce Labs Bolt T-Shirt")).toBeTruthy();//check selected is mathcing in the next page
    let buttonNameAddToCart = await homePage.AddtoCartButton.textContent();
    expect(buttonNameAddToCart?.trim()).toBe('Add to cart');
    await expect(homePage.AddtoCartButton).toBeEnabled();

    await homePage.AddtoCartButton.click();//it will change to remove

    let buttonNameRemove = await homePage.AddtoCartButton.textContent();
    expect(buttonNameRemove?.trim()).toBe('Remove');
    await expect(homePage.AddtoCartButton).toBeEnabled();

    await expect(homePage.verifyTheAddToCartIconIsEnabled()).toBeVisible();
    await homePage.AddToCartIcon.click();

    let cartPageDesc = await (await yourCart.VerifyIsThisCartPage()).textContent()
    expect(cartPageDesc).toBe("Your Cart");

    let productDesc = await (await yourCart.VerifySelectedProductDescription()).textContent();
    expect(productDesc).toBe("Sauce Labs Bolt T-Shirt");
    console.log('**********')

    await expect(await yourCart.VerifyRemoveButton()).toContainText('Remove');
    expect(await yourCart.VerifyRemoveButton()).toContainText('Remove');
    await expect((await yourCart.VerifyRemoveButton())).toBeVisible();
    expect(await (await yourCart.VerifyRemoveButton())).toBeVisible();
    expect(await yourCart.VerifyContinueShoppingButton()).toContainText("Continue Shopping");
    await expect(await yourCart.VerifyContinueShoppingButton()).toBeVisible;


    console.log('**********');


    // await page.waitForTimeout(6000);
    //await page.close();
*/
});


test('Validate the product duplicate tests ', async ({ page, loginPage, homePage, yourCart }) => {


    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.getByText('Swag Labs')).toBeVisible();

    /*
    await homePage.selectTheProductByUsingName("Sauce Labs Bolt T-Shirt");
    expect(homePage.verifySelectedprouctIsMatching("Sauce Labs Bolt T-Shirt")).toBeTruthy();//check selected is mathcing in the next page
    let buttonNameAddToCart = await homePage.AddtoCartButton.textContent();
    expect(buttonNameAddToCart?.trim()).toBe('Add to cart');
    await expect(homePage.AddtoCartButton).toBeEnabled();
    console.log('**********');
    // await page.waitForTimeout(6000);
    await page.close();*/

});

