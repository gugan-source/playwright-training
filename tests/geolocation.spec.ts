import {test,expect} from '@playwright/test'
test('geolocation ', async function({page})
{

await page.goto("https://www.gps-coordinates.net/my-location")
await page.waitForTimeout(4000)
await page.close()
})