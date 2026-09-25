import {test,expect} from '@playwright/test'
test.skip('hardassert',async function({page})
{
await page.goto("https://www.google.com/") 
await expect(page).toHaveTitle("yahoo")
console.log("hard assert passed")
await page.close()
})


test('softassert',async function({page})
{
await page.goto("https://www.google.com/") 
await expect.soft(page).toHaveTitle("yahoo")
console.log("hard assert passed")
await page.close()
})
