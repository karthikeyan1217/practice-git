import { Locator, Page, test } from '@playwright/test'

export class YourCart {

    readonly page: Page;
    readonly isThisCartPage: Locator;
    readonly selectedProductDescription: Locator;
    readonly removeButton: Locator
    readonly continueShoppingButton: Locator;
    readonly cartQuantitiyField: Locator;
    readonly AddtoCartIcon: Locator;
    readonly checkoutButton: Locator;




    constructor(page: Page) {
        this.page = page;
        this.isThisCartPage = page.locator("xpath=//span[@data-test='title']");
        this.selectedProductDescription = page.locator("xpath=//div[@data-test = 'inventory-item-name']");
        this.removeButton = page.locator("//div[@class='item_pricebar']/button");
        this.continueShoppingButton = page.locator("xpath=//button[@id= 'continue-shopping']");
        this.cartQuantitiyField = page.locator("xpath=//div[@class = 'cart_quantity']");
        this.AddtoCartIcon = page.locator("xpath=//a[@class ='shopping_cart_link']");
        this.checkoutButton = page.locator("css=#checkout")

    }


    async VerifyIsThisCartPage(): Promise<Locator> {
        return this.isThisCartPage;
    }

    async VerifySelectedProductDescription(productName?: string): Promise<Locator> {
        return this.selectedProductDescription;
    }

    async VerifyRemoveButton(): Promise<Locator> {
        return this.removeButton;
    }
    async VerifyContinueShoppingButton(): Promise<Locator> {
        return this.continueShoppingButton;
    }



}



