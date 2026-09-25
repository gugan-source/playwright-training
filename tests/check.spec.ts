import{test} from'@playwright/test'

test('check',async ({page})=>
{
    await page.goto("https://www.letskodeit.com/practice")
    
   /* await page.locator("id#bmwcheck").click()
    await page.waitForTimeout(3000)
    await page.locator("id#benzcheck").click() 
    await page.waitForTimeout(3000)
    await page.locator("id#hondacheck").click()
    await page.waitForTimeout(3000)
    await page.close()*/


    // this is another way to select the element using xpath
    await page.locator("//*[@name='cars' and @type='checkbox']"). first().click()
    await page.locator("//*[@name='cars' and @type='checkbox']"). nth(1).click()
    await page.locator("//*[@name='cars' and @type='checkbox']"). last().click()
})