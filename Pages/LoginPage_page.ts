import { test, Locator, Page } from '@playwright/test'

export class LoginPage_page {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginbutton: Locator;
  


    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("css=#user-name");
        this.password = page.locator("css=#password")
        this.loginbutton = page.locator("#login-button");
      

    }


    async openURL(url: string) {
        await this.page.goto(url)

    }

    async loginApp(usernameval: string, password: string) {
        await this.username.fill(usernameval);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

  


}