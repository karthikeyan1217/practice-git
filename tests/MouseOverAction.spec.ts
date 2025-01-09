import { Browser, chromium, firefox, webkit, Page, test, expect } from '@playwright/test'

test('automating spicejet website for mouseover action', async () => {

    const browser: Browser = await chromium.launch({ channel: 'chrome' });
    const browsercontext = await browser.newContext();
    const page = await browsercontext.newPage();
    //     await page.goto('https://www.spicejet.com/')
    //     await page.getByText('Add-ons').first().hover()

    // await page.waitForTimeout(5000)
    // await page.close();
    // await browser.close();


    //Scenario2:
    await page.goto('https://www.bigbasket.com/?nc=logo')
    await page.locator("[id= 'headlessui-menu-button-:R5bab6:']").click();

    const locator1 = page.locator("//div[@id='headlessui-menu-items-:R9bab6:']//ul[1]//li[3]");
    const locator2 = page.locator("//div[@id='headlessui-menu-items-:R9bab6:']//ul[2]//li[2]");
    const locator3 = page.locator("//div[@id='headlessui-menu-items-:R9bab6:']//ul[3]//li[1]");

    await locator1.isVisible({ timeout: 3000 });
    await page.hover("//div[@id='headlessui-menu-items-:R9bab6:']//ul[1]//li[3]");

    await locator2.isVisible({ timeout: 3000 });
    await page.hover("//div[@id='headlessui-menu-items-:R9bab6:']//ul[2]//li[2]")
    await locator3.isVisible({ timeout: 3000 });
    await page.hover("//div[@id='headlessui-menu-items-:R9bab6:']//ul[3]//li[1]")
    await locator3.click();

    // if (await locator2.isHidden())
    //     await locator2.waitFor({ state: 'attached', timeout: 2000 })
    // await locator2.hover();

    // if (await locator3.isHidden) {
    //     await locator3.waitFor({ state: 'attached', timeout: 2000 })
    //     await locator3.click();
    // }

    //await page.waitForTimeout(2000);

    await page.waitForTimeout(8000);

})