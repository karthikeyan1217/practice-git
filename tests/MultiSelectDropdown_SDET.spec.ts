import { test, Browser, BrowserContext, Page, expect, chromium, firefox, webkit } from '@playwright/test'
import exp from 'constants';

test("Selecting multi select option in dropdown", async () => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const temp = page.locator("css=#colors > option");
    await page.selectOption("css=#colors", ["Red", "Blue"]) //It will select two values in the UI
    console.log("(***********)");
    console.log(await temp.allTextContents()) //It will select all the dropdown 
    console.log(await page.locator("css=#colors > option").allTextContents()) //Simply printing all the content

    //Assertion: to check the dropdown size - scenario 1
    await expect(page.locator("css=#colors > option")).toHaveCount(7);

    //Assertion to check dropdown size - scenario 2
    await expect((await page.$$("css=#colors > option")).length).toBe(7) //how to convert to // this to be will check as a strict mode operator (===)

    //Assertion: Now check the selected values as selected in the dropdown
    expect(await page.locator("css=#colors").textContent()).toBeTruthy();

})  