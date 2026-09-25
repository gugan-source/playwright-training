import {test} from '@playwright/test'
test('dropdownbox', async function({page})
{
    await page.goto("https://www.letskodeit.com/practice") 
   /* await page.waitForTimeout(3000)
    // index , value, visible text
   // await page.locator("#carselect").selectOption({index:1})
    await page.locator("#carselect").selectOption("benz")
     //await page.locator("#carselect").selectOption("Benz")
    await page.waitForTimeout(3000)
    await page.close()*/


    //selecting multiple list items from the dropdown box
    await page.waitForTimeout(3000)
        // index , value, visible text
   //await page.locator("#multiple-select-example").selectOption([{index:0},{index:1}])
    await page.locator("#multiple-select-example").selectOption(["apple","orange","peach"])
 //await page.locator("#multiple-select-example").selectOption(["Orange","Peach"])
    await page.waitForTimeout(3000)
    await page.close()
})
