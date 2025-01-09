import { test, Browser, BrowserContext, expect, chromium, firefox, Page } from '@playwright/test'


let page: Page;
//before ALL
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://letcode.in");
    console.log('before All ')
})
//before Each
test.beforeEach(async () => {
    console.log('before Each')
})

//Test
test("Test 1 form filling ", async () => {
    await page.goto("https://letcode.in/edit")
    await page.locator("#fullName").fill("Karthikeyan")
    console.log('test 1')
})
//Test
test("Test 2 submitting the form ", async () => {
    await page.goto("https://letcode.in/buttons")
    await page.locator("#home").click();
    console.log('test 2')
})

//After Each
test.afterEach(async () => {
    console.log('after Each')
})
//After All
test.afterAll(async () => {
    await page.close();
    console.log('after All')
})