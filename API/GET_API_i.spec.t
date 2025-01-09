import { test, request, expect } from '@playwright/test'


let globalTempURL: any;

test.beforeEach('before each', async () => {
    globalTempURL = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com'
    })
    
    
})


// test('Test 1 Api test direcly passing get method ', async ({ request }) => {

//     let temp = await request.get("https://restful-booker.herokuapp.com/booking");
//     console.log(await temp.json())


// })


// test('Test 2 Api test using context ', async () => {

//     let temp = await request.newContext(
//         { baseURL: "https://restful-booker.herokuapp.com" }
//     );
//     let temp2 = await temp.get("/booking")
//     console.log(await temp2.json())


// })

// test('Test 3 Api test using befoe each ', async () => {

//     let temp2 = await globalTempURL.get("/booking")
//     console.log(await temp2.json())


// })

// test('Test 4 Api test using content type header in test level ', async () => {

//     const temp = await request.newContext(
//         {
//             baseURL: 'https://restful-booker.herokuapp.com',
//             extraHTTPHeaders: {
//                 Accept: 'string'

//             }
//         }

//     )
//     console.log(await (await temp.get('/booking/')).json())

// })


// test('Test 5 Api test using playwright.config file', async ({ request }) => {

//     let tmep = await request.get('/booking/');
//     console.log(await tmep.json());

// })

// test('Test 6: API test passing extra HTTP header directly in file', async ({ request }) => {
//     const response = await request.get("https://example.com/api/endpoint", {
//         extraHTTPHeaders: {
//             Accept: 'string'
//         }
//     });

//     console.log(await response.json());
// });


//How to pass path param and query param in test case


// test('/How to pass query param in test case', async ({ request }) => {

//     let tmep = await request.get('/booking', {
//         params: {
//             firstname: 'Jake',
//             lastname: 'Smith'
//         }
//     })
//     console.log(await tmep.json());

// })

//


test('/How to put the assertion', async ({ request }) => {

    let tmep = await request.get('/booking/1108')
    //    // let jsonRequestvalues = await tmep.json();
    //     expect(tmep.status()).toBe(200);
    //     expect(tmep.ok()).toBeTruthy()
    //     expect(await tmep.json())
    //     //console.log(await tmep.json())
    //     expect(await tmep.json()).toMatchObject({
    //   
    const jsonResponse = await tmep.json();
    await expect(jsonResponse).toMatchObject(
        {
            "firstname": "Josh",
            "lastname": "Allen",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "super bowls"
        }
    )

    expect(jsonResponse.firstname).toContain('Josh')
});

