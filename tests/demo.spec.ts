import{test} from'@playwright/test'
//these 6 are called annotation in playwright

//skip-this is used to skip the test case
//skip with condition is used to skip the test case based on some condition
//only-this is used to run only this test case and skip all other test cases
//fail-this is used to mark the test case as failed and skip all other test cases
//fixme-this is used to mark the test case as failed and skip all other test cases
//slow-this is used to mark the test case as slow and skip all other test cases


test ('first test case',async function({})
{
    console.log('Hello World')
})

test('second test case',async ({})=>
{
    //test.skip(3>1)
    test.slow()
    console.log('second ')
})

test('third test case',async ({})=>
{
    test.fail()
    console.log('third ')
})

//npx playwright test filename -> to run 
//npx playwright test filename --project=chromium -> to run in chromium browser
//npx playwright test filename --project=chromium --reporter=html -> to generate html report