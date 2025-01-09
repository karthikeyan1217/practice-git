import { test, Browser, BrowserContext, Page, expect, chromium, firefox, webkit } from '@playwright/test'

// test('handling the auto suggestion dropdwon ', async () => {
//     const browser = await firefox.launch()
//     const newContext = await browser.newContext();
//     const newPage = await newContext.newPage();
//     await newPage.goto("https://www.makemytrip.com/");
//     await newPage.locator("span.commonModal__close").click();
//     const formLocator = newPage.locator("//label[@for = 'fromCity']//child::input");
//     await formLocator.click()
//     await formLocator.focus();
//     await formLocator.pressSequentially("th", { delay: 200 });
//     const arrayofString = newPage.$$("//input[@placeholder='From']//following::ul[1]/li/div/div/div/div/div/p");
//     await newPage.waitForSelector("//input[@placeholder='From']//following::ul[1]/li/div/div/div/div/div/p");
//     for (let e of arrayofString) {
//         console.log(await e.textContent())
//     }

// })


test('handling the auto suggestion dropdown', async () => {
    const browser = await firefox.launch({ headless: false });
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://www.makemytrip.com/");

    // Close the modal
    await newPage.locator("span.commonModal__close").click();

    // Interact with the 'From' input field
    const formLocator = newPage.locator("//label[@for='fromCity']//child::input");
    await formLocator.click();
    await newPage.waitForTimeout(4000);
    await formLocator.focus();
    await newPage.keyboard.insertText("india")
    //await newPage.locator("//label[@for='fromCity']//child::input").type("india")

    // Wait for the dropdown to populate
    const arrayOfStrings = await newPage.$$("//input[@placeholder='From']//following::ul[1]/li/div/div/div/div/div/p");


    // Print all suggestions
    const count = arrayOfStrings.length;

    for (const element of arrayOfStrings) {

        const val = await element.textContent();
        console.log(await val)
        if (await val?.includes("Hindon Airport")) {
            await element.click();
        }

        expect(await newPage.locator("input[value ='Indore']").textContent()).toContain("Hindon Airport")
        expect(newPage).toHaveURL("https://www.makemytrip.com/");

        await browser.close();
    }
});