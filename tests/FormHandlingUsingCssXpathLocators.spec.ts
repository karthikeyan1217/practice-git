import { test, expect, BrowserContext } from '@playwright/test'
import { Browser, Page, firefox, chromium, webkit } from 'playwright'

//Common IDS
test('Form Validation using CSS/Xpath/common IDs', async () => {
    const browser: Browser = await chromium.launch({ channel: 'chrome' , headless: true});
    const newContext: BrowserContext = await browser.newContext();
    const page: Page = await newContext.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('css=a.btn.btn-primary').click();
    await page.locator('id=input-firstname').fill('Kasthuri');
    await page.locator("css=input[name*=  'last']").fill('P');
    await page.locator("xpath = //*[@id = 'input-email']").fill('Kasthuri17121997@gmail.com');
    await page.locator("xpath = //*[@id = 'input-telephone']").fill('8787878787');
    await page.locator("xpath = //*[@name ='password']").fill('Summer@2024');
    await page.locator("xpath = //*[@name ='confirm']").fill('Summer@2024');
    await page.locator("input[type = 'checkbox']").click();
    await page.locator("[value = 'Continue']").click();

    const alert = page.locator('css=div.alert.alert-danger.alert-dismissible');


    while (await alert.isVisible() === true) {
        const randomFigures = Math.random().toString();
        const randomSuffix = randomFigures.substring(10);
        await page.locator("xpath = //*[@id = 'input-email']").fill("Kasthuri" + randomSuffix + "@gmail.com");
        await page.locator("[value = 'Continue']").click();
    }
    const assert: string | null = await page.locator("//h1[contains(text(), 'Created')]").textContent();
    expect(assert).toContain('Created');
    //new Promise(() => { });
});










