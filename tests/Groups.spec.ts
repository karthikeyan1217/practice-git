import { test, expect, Browser, Page } from '@playwright/test'

//Group 1
test.describe('Group 1', () => {



    test("test 1 description", () => {
        console.log("test 1 .....")
    })

    test("test 2 description", () => {
        console.log("test 2 .....")
    })


})


//Group 2
test.describe('Group 2', async () => {

    test("test 3 description", () => {
        console.log("test 3 .....")
    })

    test("test 4 description", () => {
        console.log("test 4 .....")
    })

})

test.beforeEach("before Each", async () => {
    console.log("before Each....")
})

test.afterEach("after Each ", async () => {
    console.log("after Each....")
})

