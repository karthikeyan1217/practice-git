import { test, expect } from '@playwright/test'
import { Browser, BrowserContext, Page, chromium, webkit, firefox } from 'playwright'


test("Handling Bootstrap dropdown", async () => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const newPage = await browserContext.newPage();
    await newPage.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2#google_vignette");

    // Open the dropdown by clicking on the element
    await newPage.locator("span.multiselect-selected-text").click();

    await newPage.waitForTimeout(3000);

    // Wait for the dropdown options to appear (use a specific element to wait for, not a generic timeout)
    await newPage.waitForSelector("xpath=//span[@class = 'multiselect-selected-text']/following::li/a/label/input"); // Wait for the input elements to appear

    // Use a more specific selector and locate the input elements within the dropdown
    const inputLocators = newPage.locator("xpath=//span[@class = 'multiselect-selected-text']/following::li/a/label/input");
    console.log(await inputLocators.allTextContents())
    console.log(await inputLocators.allTextContents());
    console.log("****************************************");

    // Log the array of text contents
    for (let i = 0; i < await inputLocators.count; i++) {
        const temp = await inputLocators.nth(i);
        console.log(temp)

    }

    // Iterate over each element's text and log it
    // for (let e of await values) {
    //     console.log(e)

    // }

})

