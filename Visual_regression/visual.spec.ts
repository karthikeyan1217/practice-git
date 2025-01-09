
import { snapshot } from 'node:test';
import { test, expect } from '../tests_usedFor_POM_Patterns/Fixuture_Test_data'
import exp from 'constants';


// test.beforeEach('before each', async ({ page }) => {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByPlaceholder('Username').fill('Admin');
//     await page.getByPlaceholder('Password').fill('admin123');
//     await page.getByRole('button', { name: 'Login' }).click();
//     //await console.log(recorfs);
// })



test.beforeEach('before each', async ({ page }) => {
   // await page.goto('https://demoqa.com/forms');
    //await console.log(recorfs);
})


// test(`Parameterized Test Data `, async ({ page, testdata }) => {
//     await expect(page).toHaveURL("https://demoqa.com/forms");
//     // await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
//     // const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
//     // await expect(addemploye).toBeVisible();
//     // await addemploye.click();
//     // await page.locator("//input[@name = 'firstName']").fill(testdata.firstname);
//     // await page.locator("//input[@name = 'middleName']").fill(testdata.middlename);
//     // await page.locator("//input[@name = 'lastName']").fill(testdata.Lastname);
//     // await expect(page.locator("//button[@type= 'submit']")).toHaveScreenshot({});
//     //await page.locator("//button[@type= 'submit']").click();
//     // await page.waitForTimeout(3000);
//     // await expect(page.locator("//button[@type= 'submit']")).toBeVisible();
//     // await page.waitForTimeout(2000);y
//     //await page.waitForTimeout(20000)
//     // await expect(page.locator("//div[@class = 'orangehrm-attendance-card-profile-image']")).toHaveScreenshot("Dog.png");
//     //await expect(page).toHaveScreenshot('Iframe_Images.png', { fullPage: true, stylePath: "snapshot.css" });
//     await expect(await page.locator("//a[@href = 'https://demoqa.com']").textContent()).toMatchSnapshot("Text_Reading.txt");
// })



// test(`Demo QA websSIte `, async ({ page, testdata }) => {
//     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
//     // await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
//     // const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
//     // await expect(addemploye).toBeVisible();
//     // await addemploye.click();
//     // await page.locator("//input[@name = 'firstName']").fill(testdata.firstname);
//     // await page.locator("//input[@name = 'middleName']").fill(testdata.middlename);
//     // await page.locator("//input[@name = 'lastName']").fill(testdata.Lastname);
//     // await expect(page.locator("//button[@type= 'submit']")).toHaveScreenshot({});
//     //await page.locator("//button[@type= 'submit']").click();
//     // await page.waitForTimeout(3000);
//     // await expect(page.locator("//button[@type= 'submit']")).toBeVisible();
//     // await page.waitForTimeout(2000);y
//     //await page.waitForTimeout(20000)
//     // await expect(page.locator("//div[@class = 'orangehrm-attendance-card-profile-image']")).toHaveScreenshot("Dog.png");
//     //await expect(page).toHaveScreenshot("fullPage.png", { fullPage: true });

// })


test.only("Non Image ScreenShot",async({page})=>{
    await page.goto("https://playwright.dev/");
    expect(await page.locator(".hero--primary").textContent()).toMatchSnapshot("HeadingSnapshot.txt")

})