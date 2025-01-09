import { test as base } from '@playwright/test'

type myFixture = {
    credentials: any;
    testdata: any;

}

export let test = base.extend<myFixture>({
    credentials: {
        username: "Admin",
        password: "admin123"
    },

    testdata: [{
        firstname: "karthik",
        middlename: "M",
        Lastname: '63'
    },
    {
        firstname: "Vijaya",
        middlename: "M",
        Lastname: "63"
    }
    ]

})

export { expect } from '@playwright/test'


