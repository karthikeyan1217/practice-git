import { test, expect, Browser, BrowserContext, chromium, firefox, webkit } from '@playwright/test'


test('handling drop in select tag', async () => {
    let browser = await chromium.launch({ channel: "chrome" });
    const brwserContext = await browser.newContext();
    const page = await brwserContext.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const totoal = await page.locator("#country").textContent();
    expect(totoal?.includes("India")).toBeTruthy();

    for (const element in await totoal) {
        console.log(totoal[element])
    }



})