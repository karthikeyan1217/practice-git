import { test, expect } from '@playwright/test'
import { Browser, BrowserContext, chromium, firefox } from '@playwright/test'

test("Date Picking two different dates", async () => {

    let browser: Browser = await chromium.launch();
    let browserContext = await browser.newContext();
    let page = await browserContext.newPage();
    await page.goto("https://letcode.in/calendar");
    let calender = await page.locator("((//div[@class = 'datetimepicker-dummy-wrapper'])[2]/input)[1]");
    await calender.click();

    let startDateLocator = page.locator("(//div[@class = 'datepicker-days'])[2]/div/button");
    await selectDate(startDateLocator, "17");
    let selectedUI = await page.locator("(//div[@class = 'datetimepicker-selection-wrapper'])[2]/div[@class = 'datetimepicker-selection-day']").textContent();
    await expect(selectedUI).toContain("17");
    console.log("Start date is passed");


    let twicalender = await page.locator("((//div[@class = 'datetimepicker-dummy-wrapper'])[2]/input)[2]");
    await twicalender.click();
    await twicalender.click();


    let complete_days2 = page.locator("(//div[@class = 'datepicker-days'])[2]/div/button");
    await selectDate(complete_days2, "22");
    let endDateAssertion = page.locator("(((//div[@class = 'datetimepicker-selection-wrapper'])[2]/div)[2]/div)[1]");
    await expect(await endDateAssertion.textContent()).toContain("December 2024");

    await page.waitForTimeout(3000);

})
//Common Function to handle to select both the dates
async function selectDate(complete_days: Locator, date: string) {
    for (let i = 0; i < await complete_days.count(); i++) {
        let ui_text = await complete_days.nth(i).textContent();
        console.log(ui_text, "hey")
        if (ui_text == date) {
            await complete_days.nth(i).click();
            break;
        }
    }
}
