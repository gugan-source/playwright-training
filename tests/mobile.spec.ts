import{test} from'@playwright/test'

test('visiting the page',async ({page})=>
{
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)
    await page.close()
}   )