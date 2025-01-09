import { expect, test, request } from '@playwright/test'

// test('Post API 1', async ({ request }) => {
//     let resposn = await request.post("https://restful-booker.herokuapp.com/auth", {
//         data:
//         {
//             "username": "admin",
//             "password": "password123"
//         },

//         headers: {
//             "Content-Type": "application/json"
//         }
//     })


//     let responsHeder = await resposn.json();
//     console.log(responsHeder)
//console.log("")
//     // expect(resposn.status()).toBe(200)
//     // console.log(resposn.status())
//     // expect(resposn.ok()).toBeTruthy();
//     // console.log(resposn.ok())
//     // expect(resposn.statusText()).toBe('OK')
// })



// test('Post API 2', async ({ request }) => {
//     let resposn = await request.post("https://restful-booker.herokuapp.com/booking",
//         {
//             data: {
//                 "firstname": "Jim",
//                 "lastname": "Brown",
//                 "totalprice": 111,
//                 "depositpaid": true,
//                 "bookingdates": {
//                     "checkin": "2025-01-01",
//                     "checkout": "2026-01-01"
//                 },
//                 "additionalneeds": "Breakfast"
//             },
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//     )


//     let responsHeder = await resposn.json();
//     console.log(responsHeder)
//     // expect(responsHeder.booking).toMatchObject({
//     //     firstname: 'Jim',
//     //     lastname: 'Brown',
//     //     totalprice: 111,
//     //     depositpaid: true,
//     //     bookingdates: { checkin: '2025-01-01', checkout: '2026-01-01' },
//     //     additionalneeds: 'Breakfast'
//     // })
//     expect(responsHeder.booking.additionalneeds).toBe("Breakfast")
//     expect(responsHeder.booking.additionalneeds).toContain("Breakfast")
//     expect(responsHeder.booking.additionalneeds).toEqual("Breakfast")

// })


// test('Post API 3', async ({ request }) => {
//     let resposn = await request.post("/addtocart", {

//         data: { "id": "989100a2-000a-01fd-73c1-82d8b99595fa", "cookie": "user=fd3dbf1e-9337-1937-66d5-4e265bd880e5", "prod_id": 1, "flag": false },

//     }
//     )


//     // let responsHeder = await resposn.json();
//      console.log(resposn.status())

// })

let temp: any;

//before each
test.beforeEach('before each', async () => {
    temp = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com/',
    }

    );


})




test('Post API 3 using before each', async () => {

    let resposn = await temp.post("/booking", {

        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2025-01-01",
                "checkout": "2026-01-01"
            },
            "additionalneeds": "Breakfast"
        },

    }
    )


    let responsHeder = await resposn.json();
    console.log(resposn.status())
    console.log(responsHeder)

})


