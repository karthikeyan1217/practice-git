import { test, expect, Browser, Page, firefox } from '@playwright/test'


test('Dragged an dropped', async () => {
    //Scenario 1
    const browser: Browser = await firefox.launch();
    const bowserCont: BrowserContext = await browser.newContext();
    const page: Page = await bowserCont.newPage();
    await page.goto('https://letcode.in/dropable')
    await page.getByText('Drag me to my target').dragTo(page.getByText('Drop here'));
    await page.waitForTimeout(5000);
    const assert = page.getByText('Dropped!');
    expect(assert).toContainText('Dropped')
    await page.waitForTimeout(5000);

})