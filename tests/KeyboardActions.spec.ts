import { test, Expect, expect, BrowserContext, Locator } from '@playwright/test'
import { Browser, Page, firefox, webkit, chromium } from 'playwright'


test('Keyboard actions', async () => {
    const browser = await firefox.launch()
    const newContext = await browser.newContext();
    const page = await newContext.newPage();
    await page.goto("https://www.facebook.com/reg/")
    await page.locator("css=input[id^= 'u_0_8']").fill("Karthikeyan")

    await page.keyboard.down('Control+A')

    await page.keyboard.down('Control+C')

    await page.keyboard.press("Tab")
    await page.keyboard.up("Tab");

    await page.keyboard.press('Control+V');


})