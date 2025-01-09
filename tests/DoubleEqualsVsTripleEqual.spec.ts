import { expect, test } from '@playwright/test'


test('example', async ({ page }) => {

    // let a = '5';
    // let b = '5';
    // console.log('dummmy')
    // expect(a).toEqual(b);
    // console.log('dummmy');
    // console.log(expect(a).toEqual(b));


    let y = {
        name: 'karthik',
        age: 26
    }

    let z = {
        name: 'karthik',
        age: 27
    }

    expect(y.name).toBe(z.name);

});

