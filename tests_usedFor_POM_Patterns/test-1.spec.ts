import { test, expect } from '@playwright/test';
//import singeldata from '../TestData/SingleLogindata.json'
import parameterized from '../TestData/ParameterizedData.json'
import fs from 'fs'
import { parse } from 'csv-parse/sync'
import data from '../TestData//Excel.csv'



let recorfs = parse(fs.readFileSync('TestData//Excel.csv'), {
  columns: true,
  skip_empty_lines: true,

})


test.beforeEach('before each', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await console.log(recorfs);
})



// //ECSV file
// parameterized.forEach((element) => {
//   test(`Parameterized Test Data ${element.Fname}`, async ({ page }) => {
//     await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
//     await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
//     const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
//     await expect(addemploye).toBeVisible();
//     await addemploye.click();
//     await page.locator("//input[@name = 'firstName']").fill(element.Fname);
//     await page.locator("//input[@name = 'middleName']").fill(element.Mname);
//     await page.locator("//input[@name = 'lastName']").fill(element.Lname);
//     await page.locator("//button[@type= 'submit']").click();
//     await page.waitForTimeout(2000);
//     await page.close();

//   });

//Esv File


// for (const data of recorfs) {
//   test(`Add Candidate for Recruitment 1 ${data.Id}`, async ({ page }) => {
//     await page.getByRole('link', { name: 'Recruitment' }).click();
//     await page.getByRole('button', { name: ' Add' }).click();
//     await expect(page.locator('#app')).toContainText('Add Candidate');
//     await page.getByPlaceholder('First Name').fill(data.FirstName);
//     await page.getByPlaceholder('Last Name').fill(data.Id);
//     await page.getByPlaceholder('Middle Name').fill(data.LastName);
//     //await page.getByPlaceholder('Type here').first().fill(data.email);
//     await page.getByRole('button', { name: 'Save' }).click();
//     await expect(page.getByText('Application Stage')).toBeVisible();

//   })
// }


recorfs.forEach((Element) => {

  test(`Parameterized Test Data ${Element.Id}`, async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
    const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
    await expect(addemploye).toBeVisible();
    await addemploye.click();
    await page.locator("//input[@name = 'firstName']").fill(Element.FirstName);
    await page.locator("//input[@name = 'middleName']").fill(Element.Id);
    await page.locator("//input[@name = 'lastName']").fill(Element.LastName);
    await page.locator("//button[@type= 'submit']").click();
    await page.waitForTimeout(2000);
  })

})







// test('test case 2', async ({ page }) => {
//   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
//   await page.locator("css=ul.oxd-main-menu >li").nth(1).click();
//   const addemploye = await page.locator("//a[@class ='oxd-topbar-body-nav-tab-item' and contains(text(), 'Add')]");
//   await expect(addemploye).toBeVisible();
//   await addemploye.click();
//   await page.locator("//input[@name = 'firstName']").fill(singeldata.Fname);
//   await page.locator("//input[@name = 'middleName']").fill(singeldata.Mname);
//   await page.locator("//input[@name = 'lastName']").fill(singeldata.Lname);
//   await page.locator("//button[@type= 'submit']").click();
//   await page.close();

// });

