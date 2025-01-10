import { test, expect } from '@playwright/test'
import fs from 'fs'
import { parse } from 'csv-parse/sync'
import data from '../TestData//Excel.csv'


let records = parse(fs.readFileSync('TestData//Excel.csv'), {
    columns: true,
    skip_empty_lines: true
})

test.beforeEach('before each', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

})




for (const data of records) {
    test(`Add Candidate for Recruitment 1 ${data.Id}`, async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
        const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
        await expect(addemploye).toBeVisible();
        await addemploye.click();
        await page.locator("//input[@name = 'firstName']").fill(data.FirstName);
        await page.locator("//input[@name = 'middleName']").fill(data.Id);
        await page.locator("//input[@name = 'lastName']").fill(data.LastName);
        await page.locator("//button[@type= 'submit']").click();
        await page.waitForTimeout(2000);
             await page.waitForTimeout(2000);
        

    })
};
