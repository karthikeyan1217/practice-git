import { test } from '@playwright/test';
import { channel } from 'diagnostics_channel';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

test('enter the characters as like huma with delay time', async () => {

    const browser = await chromium.launchPersistentContext('', { channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=713930225169&hvpos=&hvnetw=g&hvrand=10001769181663486734&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061963&hvtargid=kwd-64107830&hydadcr=14452_2402225&gad_source=1');
    
    await page.locator("css=input#twotabsearchtextbox").hover(); // first mouse over it
    await page.locator("css=input#twotabsearchtextbox").click(); //click the search to begin typing
    await page.keyboard.type('Hello, world!', { delay: 900 }); //Now system will start typing

})