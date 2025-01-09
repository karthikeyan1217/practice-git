import { test, expect, chromium, firefox, webkit } from '@playwright/test'
import exp from 'constants';

test("Verify the row in a webtable", async () => {
    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const newPage = await browserContext.newPage();
    await newPage.goto("https://letcode.in/table");
    const webTableLocator = newPage.locator("#shopping >tbody tr");
    expect(await webTableLocator.count()).toBe(4);//Validate the column size in a webtable

    const counnt = newPage.locator("#shopping >tbody tr>td");
    const st: string[] = await counnt.allTextContents();
    console.log(st.length)
    let temp: number = 0;
    for (let i = 0; i < await counnt.count(); i++) {
        if (i % 2 != 0) {
            let stringValues = await counnt.nth(i).textContent();
            let sampleStr: number = await parseInt(await stringValues.trim());
            temp = temp + sampleStr;
        }
    }
    let newTemp = await newPage.locator("(//*[@id = 'shopping']/tfoot/td)[2]");
    let totalValue = await newTemp.textContent();
    console.log(totalValue);
    await expect(temp.toString()).toContain(totalValue);

})
//One Approach using inner loops
test("Make user as present if they are available", async () => {
    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const newPage = await browserContext.newPage();
    await newPage.goto("https://letcode.in/table");

    let rows = await newPage.locator("//*[@id = 'simpletable']//tbody/tr");
    let count = await rows.count();


    for (let i = 0; i < count; i++) {

        for (let j = 0; j < 4; j++) {

            let sting = await rows.nth(i).locator('td').nth(j);

            let tempp = await sting.textContent();
            console.log(tempp);
            if (tempp?.includes("Mani")) {
                await rows.nth(i).locator("input[type='checkbox']").check();
                break;
            }

        }
    }
    await newPage.waitForTimeout(2000);
});

test("Pagination Scenarios, extracting text in all the pages", async () => {
    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const newPage = await browserContext.newPage();
    await newPage.goto("https://letcode.in/advancedtable");
    let rows = newPage.locator("//*[@id = 'advancedtable']/tbody/tr");
    let columns = newPage.locator("//*[@id = 'advancedtable']/thead/tr/th");

    for (let p = 0; p < 10; p++) {
        let newTemp = await newPage.locator("//span/child::a[@class = 'paginate_button ']").nth(p);

        if (p > 0) {

            await newTemp.click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            let currentrowes = await rows.nth(i);

            for (let j = 0; j < await columns.count(); j++) {
                let tempstring = await currentrowes.locator('td').nth(j).textContent();
                console.log(tempstring)
            }

        }
    }
}
);


function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {
            const element = nums[j];

            if (nums[i] + nums[j + 1] == target) {
                return [i, j]
            }
        }
    }
};