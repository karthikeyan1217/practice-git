import { test, expect, Browser, Page, chromium, firefox, webkit, BrowserContext } from '@playwright/test'
import path from 'path';
import { buffer } from 'stream/consumers';

test('Single uploading and mulitple uploading and deselecting', async () => {
    const browser: Browser = await firefox.launch();
    const browswerContext: BrowserContext = await browser.newContext();
    const page = await browswerContext.newPage();
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    await page.locator("[type='file']").setInputFiles("C:/Users/Lenovo/Downloads/Grafik_Anerkennung-EN_2023 - Copy.pdf"); //Single Uploading
    //await page.waitForTimeout(5000);

    await page.locator("[type='file']").setInputFiles([]); //Deattached the selected attachment

    //await page.waitForTimeout(3000);
    await page.locator("[type='file']").setInputFiles([ //Attaching multiple file  
        path.join("C:/Users/Lenovo/Downloads/Grafik_Anerkennung-2.pdf"),
        path.join("C:/Users/Lenovo/Downloads/Grafik_Anerkennung-4.pdf")
    ])
    const locator = page.locator("[title = 'Clear selected files']");
    await expect(locator).toBeVisible();
})






test('Create a file during run time', async () => {
    const browser: Browser = await firefox.launch();
    const browswerContext: BrowserContext = await browser.newContext();
    const page = await browswerContext.newPage();
    await page.goto('https://demo.automationtesting.in/FileUpload.html');
    await page.locator("[type='file']").setInputFiles("C:/Users/Lenovo/Downloads/Grafik_Anerkennung-EN_2023 - Copy.pdf");
    //await page.waitForTimeout(5000);

    await page.locator("[type='file']").setInputFiles([{
        name: 'file.html',
        mimeType: 'text/html',
        buffer: Buffer.from('this is best')
    },
    {
        name: 'file22.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is best two')
    }
    ])

    await page.waitForTimeout(33000);
    await expect(page.locator("[type = 'file']")).toBeVisible();
})