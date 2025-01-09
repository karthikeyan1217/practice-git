import { test, expect, BrowserContext } from '@playwright/test'
import { Browser, Page, firefox, chromium, webkit } from 'playwright'

test('Verify the Left click', async () => {
    const browser: Browser = await chromium.launch({ channel: 'chrome' });
    const newContext: BrowserContext = await browser.newContext();
    const page: Page = await newContext.newPage();
    await page.goto('https://letcode.in/buttons');
    await page.locator('#home').click({ button: 'right' });
    await page.waitForTimeout(2000);
    await page.close();
    await browser.close();


})

test('Verify the Middle click', async () => {
    const browser2: Browser = await firefox.launch();
    const newContext2: BrowserContext = await browser2.newContext();
    const page2: Page = await newContext2.newPage();
    await page2.goto('https://letcode.in/buttons');
    await page2.locator('#home').click({ button: 'left' });
    await page2.waitForTimeout(2000);
    await page2.close();
    await browser2.close();


})

test('Verify the right click', async () => {
    const browser3: Browser = await webkit.launch();
    const newContext3: BrowserContext = await browser3.newContext();
    const page3: Page = await newContext3.newPage();
    await page3.goto('https://letcode.in/buttons');
    await page3.locator('#home').click({ button: 'left' })
    await page3.locator('#home').click({ button: 'middle' });
    await page3.locator('#home').click({ button: 'right' });
    await page3.locator('#home').dblclick();
    //await page3.waitForTimeout(2000);
    await page3.close();
    await browser3.close();


})