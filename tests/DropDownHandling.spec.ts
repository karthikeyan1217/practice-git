import { test, expect, Locator } from '@playwright/test'
import { Browser, chromium, webkit, firefox, Page, BrowserContext } from 'playwright'











test('handling dropdown using text(label)', async () => {

    const browser: Browser = await chromium.launch({ channel: 'chrome' })
    const BrowserContext: BrowserContext = await browser.newContext();
    const page: Page = await BrowserContext.newPage();
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
    const selectOptionCountry = "[rel-title = 'Select Country'] > p > select > option";
    const temp = await page.$$(selectOptionCountry);
    for (const e of temp) {
        console.log(await e.textContent())
    }


})