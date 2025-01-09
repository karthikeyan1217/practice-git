import { test } from '@playwright/test'


test('validate  the POST API', async ({ page }) => {

    await page.goto(<string>process.env.URL)
    console.log(process.env.URL)
    console.log(process.env.USER)

})