import{test} from'@playwright/test'

test.skip('visiting the page',async ({page})=>
{
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)
    await page.close()
}   )


test.skip('placeholder',async ({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    //role :('element',{name:'element name'}) -> to find the element by role
    await page.getByRole('button',{name:'Login'}).click()   
    await page.waitForTimeout(3000)
    await page.close()
}   )

test.skip('label',async ({page})=>
{
    await page.goto('https://www.mycontactform.com')
    await page.getByLabel('User Name:').fill('hi')
     await page.getByLabel('Password:').fill('hi')
     
    await page.waitForTimeout(3000)
    await page.close()
})

test('get by text',async ({page})=>
{
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)
    await page.getByText('Gmail').click()
    await page.waitForTimeout(3000) 
    await page.close()
}   )