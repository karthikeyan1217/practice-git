import { test, Expect, expect, BrowserContext, Locator } from '@playwright/test'
import { Browser, Page, firefox, webkit, chromium } from 'playwright'


const hello = test('Login paeg', async () => {
    const browser: Browser = await firefox.launch();
    const page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.locator('#input-email').fill('karthie@gmail.com')
    const pass: Locator = page.locator('#input-password');
    await pass.fill('Summer@2024');
    console.log( await pass.locator("(//*[contains(text(), 'Forgotten')])[1]").isVisible());
    await page.locator("[value = 'Login']").click();
    const title = await page.title();
    await page.screenshot({ path: 'karthik.png' })
    expect(title).toEqual('My Account')
    await browser.close();

});

/*

test('Browser Context', async () => {

    const browser: Browser = await firefox.launch();
    //Browser 1
    const bbrowserContext_1: BrowserContext = await browser.newContext()
    //Browse 2
    const bbrowserContext_2: BrowserContext = await browser.newContext()

    const page1: Page = await bbrowserContext_1.newPage()
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page1.locator('#input-email').fill('karthie@gmail.com')
    await page1.locator('#input-password').fill('Summer@2024')
    await page1.locator("[value = 'Login']").click();


    const page2: Page = await bbrowserContext_2.newPage()
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page2.locator('#input-email').fill('KKKK@gmail.com')
    await page2.locator('#input-password').fill('Summer@2024')
    await page2.locator("[value = 'Login']").click();
    await page1.pause();



})

// test('Authentication', async () => {
//     // Launch browser
//     const browser = await chromium.launch({ headless: false });

//     // Create a new page
//     const page: Page = await browser.newPage();

//     const userName: string = 'admin';
//     const password: string = 'admin';

//    // await page.goto("https://"+ userName + ':'+  password + "@" + "the-internet.herokuapp.com/basic_auth");
//    // await page.goto(`https://${userName}:${password}@the-internet.herokuapp.com/basic_auth`);

//    //await page.goto("https://" + userName + ":" + password + "@" + "the-internet.herokuapp.com/basic_auth");
//    await page.goto(`https://${userName}:${password}@the-internet.herokuapp.com/basic_auth`)


//     await new Promise(() => {});
// });*/