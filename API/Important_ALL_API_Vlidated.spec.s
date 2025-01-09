import { Request, expect, test } from "@playwright/test";
import JsonTestData from '../TestData/API_PUT.json'

let recordCreationID: number;
test('validate  the POST API', async ({ request }) => {
    let postcallReference = await request.post('/booking', {
        headers: {
            "Content-Type": "application/json"
        },
        data: JsonTestData.PostAPIBody

    })
    let temp = await postcallReference.json();
    console.log(temp);
    expect(postcallReference.ok()).toBeTruthy();
    expect(postcallReference.status()).toBe(200);
    expect(postcallReference.statusText()).toBe('OK');
    expect(temp.booking).toMatchObject(JsonTestData.PostAPIBody)
    recordCreationID = temp.bookingid

})


test('validate  the PUT API', async ({ request }) => {
    let PutTemp = await request.put(`/booking/${recordCreationID}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            data: JsonTestData.PutAPiBody
        }
    )
    let ref = await PutTemp.json();
    console.log(ref)



})



test('validate  the PATCH API', async ({ request }) => {
    let patref = await request.patch(`/booking/${recordCreationID}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            data: {
                "firstname": JsonTestData.PatchAPI.firstname,
                "totalprice": JsonTestData.PatchAPI.totalprice
            }
        }
    )
    let temps = await patref.json();
    console.log(temps)

})

test('validate the GET API', async ({ request }) => {
    let getref = await request.get(`/booking/${recordCreationID}`,
        {
            headers: {
                "Accept": "application/json",
            }
        }
    )
    let temps = await getref.json();
    console.log(temps)

})


test('validate the Deelte API', async ({ request }) => {
    let delRef = await request.delete(`/booking/${recordCreationID}`,
        {
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
        }
    )
    let temps = await delRef.text();
    console.log(temps)
    expect(temps).toBe('Created')
    expect(delRef.status()).toBe(201);



    //Trying to delete this again
    delRef = await request.delete(`/booking/${recordCreationID}`,
        {
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
            }
        }
    )
    temps = await delRef.text();
    console.log(temps)
    expect(temps).toBe("Method Not Allowed");


    //Trying to call method to ensue the resources deleted
    let getref = await request.get(`/booking/${recordCreationID}`,
        {
            headers: {
                "Accept": "application/json",
            }
        }
    )
    let temps1 = await getref.text();
    console.log(temps1)



})


