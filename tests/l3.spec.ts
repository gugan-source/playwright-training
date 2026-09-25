import{test} from'@playwright/test'

test('check',async ({page})=>
{
    await page.goto('https://www.letskodeit.com/practice')
    
    await page.locator("//*[@id='user']").fill('hi')
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='password']").fill('hi')
    await page.waitForTimeout(3000)
    await page.locator("//*[@id='right_col_top']/form/div/input").click()
    await page.waitForTimeout(3000)
    await page.close()

 

})