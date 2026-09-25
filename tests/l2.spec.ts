import{test} from'@playwright/test'

test('css',async ({page})=>
{
    await page.goto('https://www.mycontactform.com')
    //css selector there are 7 ways and shortcut 
    //1.tagname and id       
    //syntax : tagname#id
   // await page.locator("input#user").fill('hi')
    //2.tagname and class
    //syntax : tagname.classname
    //await page.locator("input.btn-log").click()

    //3.tagname and attribute
    //syntax : tagname[attribute='value']
   // await page.locator("input[type='text']").fill('hi')

   //4.tagname.classname[attribute='value']
   //syntax : tagname.classname[attribute='value']
   //await page.locator("input.txt_log[type='text']").fill('hi')

   //5.tagname.prefix of attribute
   //syntax : tagname[attribute^='perfix value']
   //await page.locator("input[type^='te']").fill('hi')

   //6.tagname.suffix of attribute
   //syntax : tagname[attribute$='suffix value']
   //await page.locator("input[type$='ext']").fill('hi')

   //7.tagname and substring of attribute
   //syntax : tagname[attribute*='suffix value']
   //await page.locator("input[type*='ex']").fill('hi')

   //8.copy -> copy selector
   await page.locator("#user").fill('hi')

    await page.waitForTimeout(3000)
    await page.close()
}   )