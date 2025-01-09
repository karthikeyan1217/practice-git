import { test, expect, Browser, BrowserContext, chromium, firefox, webkit, Page } from '@playwright/test'
import exp from 'constants';

test('Wait using the function parameter method', async () => {

    let browser: Browser = await chromium.launch({ channel: 'chrome' })
    const browserContext: BrowserContext = await browser.newContext();
    const page: Page = await browserContext.newPage();
    await page.goto("https://letcode.in/alert");


    let dailog_message: string = "";
    let sendingInput = "Karthikeyan R";
    page.on('dialog', async (dailog) => {
        dailog_message = dailog.message()
        if (dailog_message.includes("Hey! Welcome to LetCode")) { //this is alert text captured from UI
            console.log(dailog_message + ' ' + dailog.type())  // this will handle the simple alert 
            await dailog.dismiss();
        }
        else if (dailog_message.includes("Are you happy with LetCode?")) {//this is alert text captured from UI
            console.log(dailog_message + ' ' + dailog.type()) // this will handle the confirmation alert 
            await dailog.accept();
        }
        else if (dailog_message.includes("Enter your name")) {//this is alert text captured from UI
            dailog.accept(sendingInput);       // this will handle the prompt alert and send the value thru the accept method, accept its overloads method                      
        }

    })

    await page.locator("css=#accept").click();//Trigger the simple alert in UI
    expect(dailog_message).toContain('Hey! Welcome to LetCode') //Assertion for simple alert 

    await page.locator("css=#confirm").click();//Trigger the confirmation alert in UI
    expect(dailog_message).toContain('Are you happy with LetCode?') //Assertion for confirmation alert 

    await page.locator("css=#prompt").click(); //Trigge the prompt alert 
    const promptEnteredName = await page.getByText('Your name is').textContent()//In ui after the prompt done, the sent value are populating in ui, hence, i am using that for assertion
    console.log(promptEnteredName) 
    expect(promptEnteredName).toContain(sendingInput);


})
