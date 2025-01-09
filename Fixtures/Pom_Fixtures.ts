import { HomePage } from '../Pages/HomePage'
import { LoginPage_page } from '../Pages/LoginPage_page'
import { YourCart } from '../Pages/YourCart'
import { test as base } from '@playwright/test'
import { expect, Page } from '@playwright/test'
import { LoginDup } from '../Pages/LoginDup'




type myPOMFixtures = {
    loginPage: LoginPage_page;
    homePage: HomePage;
    yourCart: YourCart;

}

export const test = base.extend<myPOMFixtures>({
    loginPage: async ({ page }, use) => {
        // Initialize the page object for LoginPage
        const loginPage = new LoginPage_page(page);
        await use(loginPage); // 'await use' to ensure it's correctly passed into the test
    },

    homePage: async ({ page }, use) => {
        // Initialize the page object for HomePage
        const homePage = new HomePage(page);
        await use(homePage); // 'await use' to ensure it's correctly passed into the test
    },

    yourCart: async ({ page }, use) => {
        // Initialize the page object for YourCart
        const yourCart = new YourCart(page);
        await use(yourCart); // 'await use' to ensure it's correctly passed into the test
    },
});

