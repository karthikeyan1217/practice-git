import { test, expect, Page, Browser, chromium, firefox, webkit } from '@playwright/test'


// test.use({ video: 'off' }); // we can configure video settings here too but need to declare in gloabal level not in test level

test.beforeEach('Before each', async ({ page }) => {
    console.log("Before each is executed")

    await page.goto("https://practicetestautomation.com/practice-test-login/")

})

test.afterEach('After each', async ({ page }) => {

    console.log("after each is executed");
    // await page.waitForTimeout(3000);
    // await page.close();

})




test("Successfull Login test ", { tag: ['@smoke', '@sanity'] }, async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("css=input#username").fill("student")
    await page.locator("css=input#password").fill("Password123");
    await page.locator("css=button#submit").click();
    let currentPageURL = await page.url();
    expect(currentPageURL).toBe("https://practicetestautomation.com/logged-in-successfully/");
    expect(await page.locator("h1.post-title").textContent()).toBe("Logged In Successfully");
    let logoutLocator = await page.locator("xpath=//a[contains(text(), 'Log out')]");
    await expect(logoutLocator).toBeVisible();
    await expect(await logoutLocator.textContent()).toBe('Log out')

})

test("unSuccessfull Login test ", { tag: ["@sanity", '@reg'] }, async ({ page }) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("css=input#username").fill("student ")
    await page.locator("css=input#password").fill("Password123 ");
    await page.locator("css=button#submit").click();
    expect(await page.locator("div#error").textContent()).toBe("Your username is invalid!");
    let errorLocator = await page.locator("div#error");
    await expect(errorLocator).toBeVisible();

    const backgroundColor = await errorLocator.evaluate((el) => {
        return getComputedStyle(el).backgroundColor;
    });

    const textColorInTheBackgroud = await errorLocator.evaluate((el) => {
        return window.getComputedStyle(el).backgroundColor;
    });

    await expect(backgroundColor).toBe("rgb(227, 72, 72)");
    console.log('text color =>', textColorInTheBackgroud)


    //Code Level We Can Take a Screenshot
    await page.screenshot({ path: "./videos/" + "activewindo.png" })
    await page.screenshot({ path: "./videos/" + "fullpage.png", fullPage: true })
    await page.locator("errorLocator").screenshot({ path: "./videos/" + "Webelement.png" })

    let temp = false;
    await expect(temp).toBeTruthy();


});