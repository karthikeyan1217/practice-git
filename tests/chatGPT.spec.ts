import { test } from '@playwright/test';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

function mergeAlternately(word1: string, word2: string): string {

    let empty_string = "";


    if (word1.length > 1 && word2.length > 1) {


        for (let i = 0; i < word1.length; i++) {

            empty_string = word1.charAt(i)


        }

        for (let i = 0; i < word2.length; i++) {

            const element = word2.charAt(i)
            console.log(element)

        }

    }




};

let tem = mergeAlternately("abc", "xyz");
console.log("logging Headers", tem)
