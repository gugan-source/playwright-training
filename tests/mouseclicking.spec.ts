import {test} from '@playwright/test'

test.skip('mouse', async function({page})
{
    await page.goto("http://www.mycontactform.com") 
    await page.waitForTimeout(3000)
   //await page.getByRole('button',{name:'Login'}).click()
   //await page.getByRole('button',{name:'Login'}).dblclick()
   
await page.getByRole('button',{name:'Login'}).click({button:'right'})
    await page.waitForTimeout(3000)
    await page.close()
})

test.skip('mousehovering', async function({page} )
{
    await page.goto("https://www.google.com") 
    await page.waitForTimeout(3000)
    let e=await page.getByRole('link',{name:'Gmail'})
    await e.hover()
    await page.waitForTimeout(3000)
    await e.click()
    await page.waitForTimeout(3000)
    await page.close()
})

test('drag and drop', async function({page})
{
    await page.goto("https://jqueryui.com/droppable/")
    // webelements: inside the frame 
    let f=await page.frameLocator('#content > iframe') 
    await page.waitForTimeout(3000)
  let s= await f.locator("div#draggable")
  let t= await f.locator("div#droppable")
   
    await s.dragTo(t)
     await page.waitForTimeout(3000)
    await page.close()
})