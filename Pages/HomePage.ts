import { Locator, Page, test } from '@playwright/test'

export class HomePage {

    readonly page: Page;
    readonly allProductLink: Locator;
    readonly addtoCartbuttonForAllProducts: Locator;
    readonly selectedProductName: Locator;
    readonly AddtoCartButton: Locator;
    readonly AddToCartIcon: Locator;


    constructor(page: Page) {
        this.page = page;
        this.allProductLink = page.locator("//div[@class='inventory_item_label']/a/div");
        this.addtoCartbuttonForAllProducts = page.locator("//div[@class='inventory_details_desc_container']/button");
        this.selectedProductName = page.locator("//div[@class='inventory_details_name large_size']")
        this.AddtoCartButton = page.locator("//div[@class='inventory_details_desc_container']/button");
        this.AddToCartIcon = page.locator("//a[@class ='shopping_cart_link']");
    }


    async selectTheProductByUsingName(prodctName: string) {
        for (let i = 0; i < await this.allProductLink.count(); i++) {
            let temp = await this.allProductLink.nth(i).textContent();
            if (prodctName.trim().toLowerCase() === temp?.toLowerCase().trim() && typeof temp == 'string') {
                console.log(temp)
                await this.allProductLink.nth(i).click();
               // await this.addtoCartbuttonForAllProducts.click();
                break;
            }
        }
        console.log('Please check the entered values is a string or entered product is not available in UI')
    }


    async verifySelectedprouctIsMatching(userEnteredProduct: string): Promise<boolean> {

        if (await this.selectedProductName.textContent() === userEnteredProduct.trim()) {
            return true;
        }
        else {
            return false;
        }
    };


    async veifyAddToButtonFunctionality(): Promise<Locator> {
        return this.AddtoCartButton;
    }

    verifyTheAddToCartIconIsEnabled(): Locator {
        return this.AddToCartIcon
    }


}