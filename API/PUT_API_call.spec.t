import { test, expect, request } from '@playwright/test'
import data from '../TestData/API_PUT.json'

`Scenario 2`
let req;
test.beforeEach('before each', async () => {
    req = await request.newContext()

})



test('Put Api call', async () => {
    const temp = await req.put(`/booking/${data.PutAPIPathParams}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Germanu",
            "lastname": "Brown",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2025-01-01",
                "checkout": "2025-01-15"
            },
            "additionalneeds": "Dinner"
        }
    })
    console.log(await temp.json());


})

test(`validate the get call for the put APIs`, async () => {
    let temps = await req.get(`/booking/${data.PutAPIPathParams}`, {

        headers: {
            "Accept": "application/json"
        }

    });
    let te = await temps.json();
    console.log(te)


})




//     `Scenario 2`

// test('Put Api call', async ({ request }) => {
//     const temp = await request.put(`/booking/${data.PutAPIPathParams}`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
//         },
//         data: {
//             "firstname": "Germanu",
//             "lastname": "Brown",
//             "totalprice": 150,
//             "depositpaid": true,
//             "bookingdates": {
//                 "checkin": "2025-01-01",
//                 "checkout": "2025-01-15"
//             },
//             "additionalneeds": "Dinner"
//         }
//     })
//     console.log(await temp.json());


// })

// test(`validate the get call for the put APIs`, async ({ request }) => {
//     let temps = await request.get(`/booking/${data.PutAPIPathParams}`, {

//         headers: {
//             "Accept": "application/json"
//         }

//     });
//     let te = await temps.json();
//     console.log(te)


// })