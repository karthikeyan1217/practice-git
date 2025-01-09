import { test } from '@playwright/test'

test.describe('group 1', async () => {

    test('test case 1 belongs to group 1 @group1TestCase', async () => {
        console.log("test 1 executing...")
    })

})

test.describe('group 2', async () => {

    test('test case 2 belongs to group 2', { tag: "@group1TestCase" }, async () => {
        console.log("test 2 executing...");
    })

})


test('test case 3', { tag: ["@Smoke", "@Sanity"] }, async () => {
    console.log("test 3 executing...")
})

test('test case 4', { tag: "@Regression" }, async () => {
    console.log("test 4 executing...")
})