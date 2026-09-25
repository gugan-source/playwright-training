import {test} from '@playwright/test'
test('file uploading', async function({page})
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(["C:\\Users\\Gugan N\\OneDrive\\Desktop\\Gugan CHAPTER full report.pdf"])
    await page.waitForTimeout(4000)
    await page.close()
})