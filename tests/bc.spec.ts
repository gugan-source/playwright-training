/*browser context: separete browser profile inside the browser
                   isolated, no cookies, no local storage
                  each browser cntext will have multiple page
* */

import {test} from '@playwright/test'
test('two tabs',async function({browser})
{
    let context=await browser.newContext()//browser context
    let page1=await context.newPage()//page1
    let page2=await context.newPage()//page2
    await page1.goto("https://testautomationpractice.blogspot.com/") 

    await page2.goto("https://www.google.com/") 
   
await page1.bringToFront()//bring page1 to front
console.log("page1 title: ",await page1.title())
await page1.waitForTimeout(3000)
await page2.bringToFront()//bring page2 to front
console.log("page2 title: ",await page2.title())
await page1.waitForTimeout(3000)
 await page2.waitForTimeout(3000)


    //await page1.close()
    //await page2.close()
})