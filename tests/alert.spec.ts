import {test, expect} from '@playwright/test'



test.skip('alert with ok button ', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/") 
    //dialog window handler
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain("I am an alert box!")
    await page.waitForTimeout(3000)
    await dialog.accept()
    })
      await page.waitForTimeout(2000)
      //alert button clicking 
      await page.locator('#alertBtn').click()
      
      await page.waitForTimeout(3000)
    await page.close()
})
test.skip('confirm with ok and cancel button ', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/") 
    //dialog window handler
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain("Press a button!")
    await page.waitForTimeout(3000)
    await dialog.accept()// await dialog.dismiss()
    })
      await page.waitForTimeout(2000)
      //confirm button clicking 
      await page.locator('#confirmBtn').click()
      
      await page.waitForTimeout(3000)
    await page.close()
})
test('prompt box ', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/") 
    //dialog window handler
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")
    await page.waitForTimeout(3000)
    await dialog.accept("dhivya")// 
    })
      await page.waitForTimeout(2000)
      //prompt  button clicking 
      await page.locator('#promptBtn').click()
      
      await page.waitForTimeout(3000)
    await page.close()
})