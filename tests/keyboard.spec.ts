import {test} from '@playwright/test'
test('keyboard handling ', async function({page})
{
    await page.goto("http://www.mycontactform.com") 
    //up and down- single
    //press- combination
    //control+a
    // control+c
    //control+v
    //tab
    //enter
    await page.waitForTimeout(3000)
    await page.type('#user',"hi")
    //control+a
    await page.keyboard.press('Control+A')
     await page.keyboard.press('Control+C')
     //tab  //password
     await page.keyboard.down('Tab')
     await page.keyboard.up('Tab')
      await page.keyboard.press('Control+V')
  
       await page.keyboard.down('Tab')
     await page.keyboard.up('Tab')
      await page.keyboard.down('Enter')
     await page.keyboard.up('Enter')
      await page.waitForTimeout(3000)
    await page.close()
})