import { test, expect } from './Fixuture_Test_data'


test.beforeEach('before each', async ({ page, credentials,  }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill(credentials.username);
    await page.getByPlaceholder('Password').fill(credentials.password);
    await page.getByRole('button', { name: 'Login' }).click();

})


test(`Parameterized Test Data `, async ({ page,testdata }) => {
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
    const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
    await expect(addemploye).toBeVisible();
    await addemploye.click();
    await page.locator("//input[@name = 'firstName']").fill(testdata.firstname);
    await page.locator("//input[@name = 'middleName']").fill(testdata.middlename);
    await page.locator("//input[@name = 'lastName']").fill(testdata.Lastname);
    await page.locator("//button[@type= 'submit']").click();
    await page.waitForTimeout(2000);
})