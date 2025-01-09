import { test, expect, Browser, BrowserContext, chromium, firefox, webkit, Page } from '@playwright/test'

test.use({ actionTimeout: 7000 });

test('Wait using the function parameter method', async () => {

    let browser: Browser = await chromium.launch({ channel: 'chrome' })
    const browserContext: BrowserContext = await browser.newContext();
    const page: Page = await browserContext.newPage();
    await page.goto("https://demo.automationtesting.in/Register.html");
    page.setDefaultTimeout(15000);
    await page.locator("//label[contains(text(),'Hobbies')]/following::input[@id = 'checkbox11']").click();

})

test('Wait using the function parameter method2', async () => {
    // Launch the browser in non-headless mode with the browser maximized
    let browser: Browser = await chromium.launch();

    // Create a new browser context
    const browserContext: BrowserContext = await browser.newContext({
        viewport: { width: 959, height: 730 }, // Set the desired viewport size
    });

    // Open a new page
    const page: Page = await browserContext.newPage();

    // Navigate to the target URL
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Wait for the checkbox and click it
    await page.locator("//label[contains(text(),'Hobbies')]/following::input[@id = 'checkbox11']").click();

    // Close the browser
    await browser.close();
});
