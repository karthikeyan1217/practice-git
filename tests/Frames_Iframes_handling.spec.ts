import { expect, firefox, Frame, test } from '@playwright/test';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

//Using framelocator() method  ----> Way 1
test('handle the one single frame with framelocator()', async () => {

    const browse = await firefox.launch();
    const newContext = await browse.newContext();
    const page = await newContext.newPage();
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(4000)
    await page.frameLocator("frame[src='frame_1.html']").locator("#id1 > div > input").fill('Hello Id is 1') //used page.framLocator().
    await page.waitForTimeout(4000);
})


//Using page.frame(URl) method OR (Iframe name)  -- ---->   Way 2
test('handle the one single frame', async () => {

    const browse = await firefox.launch();
    const newContext = await browse.newContext();
    const page = await newContext.newPage();
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(4000)
    await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })?.locator("#id1 > div > input").fill('Hello Id is 1');//used page.frameURL/I frame name().
    await page.waitForTimeout(4000);
})

//How to handle the inner frames ?- by using childframe()
test('handle the inner iframe', async () => {
    const browse = await firefox.launch({headless:true});
    const newContext = await browse.newContext();
    const page = await newContext.newPage();
    await page.goto("https://ui.vision/demo/webtest/frames/"); //Go to the URL
    const locator3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });//Get the parent locator and save it
    const childframes = await locator3?.childFrames();//Now using parent locator, get the child frames, where it will give [] of inner frame list
    await childframes[0].locator("div.vd3tt > div[class ='AB7Lab Id5V1']").first().click();//Now interact with the inner frame elements
    await locator3?.locator("#id3 > div > input").fill("Hey I am overriding it")//Now switch to parent frame by using parent frame element

    const enteredInformation = await locator3?.locator("#id3 > div > input").inputValue();//input values will return the entered text
    console.log(enteredInformation + " This ifnormation taken from the UI")

    expect(enteredInformation.includes("overriding")) //now do the assertion


})

// test('handle the innessr iframe', async () => {
//     // Launch browser
//     const browser = await firefox.launch({ headless: false });
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     // Navigate to the URL
//     await page.goto("https://ui.vision/demo/webtest/frames/");

//     // Access the iframe by its URL
//     const locator3 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
//     if (!locator3) {
//         throw new Error("Frame with URL not found");
//     }

//     // Interact with the input field inside the frame
//     const inputSelector = "#id3 > div > input"; // Replace with the correct selector if needed
//     await locator3.locator(inputSelector).fill("Hey I am overriding it");

//     // Retrieve the value entered in the input field
//     const enteredInformation = await locator3.locator(inputSelector).inputValue();
//     console.log(enteredInformation + " This information is taken from the UI");

//     // Validate the entered value
//     expect(enteredInformation).toContain("overriding")

//     // Close the browser
//     await browser.close();
// });