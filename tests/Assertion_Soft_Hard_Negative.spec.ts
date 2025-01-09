import { expect, test, Browser, BrowserContext, chromium, firefox } from '@playwright/test'
import exp from 'constants';

test("Hard Assertion", async ({ }) => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browserContext: BrowserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://demo.nopcommerce.com/")

    //Assert the Page URL
    expect(page).toHaveURL("https://demo.nopcommerce.com/");


    //Assert the Page Title
    expect(page).toHaveTitle("nopCommerce demo store");


    //Assert the element to be visible
    expect(page.locator("img[alt ='nopCommerce demo store']")).toBeVisible();


    //Assert the element is enabled
    expect(page.locator("img[alt ='nopCommerce demo store']")).toBeEnabled();


    //Asser the element is checked();
    await page.goto("https://demo.nopcommerce.com/apple");
    const locatorForElement = page.locator("//label[contains(text(), ' Intel Core i5 ')]");
    await locatorForElement.click();
    //await page.waitForSelector("//label[contains(text(), ' Intel Core i5 ')]")
    //await page.waitForTimeout(2000);
    expect(locatorForElement).toBeChecked();



    //Assert the the element has attribue                           attribute name , attribute value
    expect(page.locator("input#small-searchterms")).toHaveAttribute("placeholder", "Search store");


    //Assert the to have text - it will be the exact match
    //whatever the locator going to return, using haveText() we are validating with entire text, this Register should match in the UI not the locators
    expect(page.locator("a.ico-register")).toHaveText("Register")


    //Assert the element by using the contains text ();  used the above locators
    expect(page.locator("a.ico-register")).toContainText("Reg")


    //Assert the element by using inputted values
    const locatorString = "#small-searchterms";
    await page.locator(locatorString).fill("karthik");
    //await page.waitForSelector(locatorString);
    expect(page.locator(locatorString)).toHaveValue("karthik");


    //Assert the dropdown count
    const droptdownlocator = "#customerCurrency";
    await expect(page.locator(droptdownlocator)).toHaveCount(1)
})


test("SOFT Assertion", async ({ }) => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browserContext: BrowserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://demo.nopcommerce.com/apple");

    //Assert the element by using inputted values---Mandatory failing
    const locatorString = "#small-searchterms";
    await page.locator(locatorString).fill("vijay");
    expect.soft(page.locator(locatorString)).toHaveValue("karthik");//Changed the Fill values, its expecting the karthik but in real its enter vijay


    //Assert the dropdown count  ---Mandatory failing
    const droptdownlocator = "#customerCurrency";
    await page.locator(droptdownlocator).isEditable();
    await expect.soft(page.locator(droptdownlocator)).toHaveCount(23)//actual count is 2, but its expecting 23

})



test("Negative Assertion with using Hard and Soft", async () => {
    const browser: Browser = await firefox.launch({ headless: false })
    const browserContext: BrowserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://demoo.nopcommerce.com/");  // Firsst logged in the correct URL
    //Soft Assertion with negative assertion
    await expect.soft(page).not.toHaveURL("https://demo.nopcommerce.com/"); //here its incorrect URL were added one O for the Demo domain so it will pass 

    //Hard Assertion with negative assertion
    await expect(page).not.toHaveTitle("nopCommerce demoo store");//here the title i misplled the word with storee instead od store, so it will pass



})
