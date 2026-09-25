import{test,expect} from '@playwright/test'
test('Simple .env demonstration', async ({ page }) => {
  // 1. Navigates to the baseURL defined in your .env file (https://playwright.dev)
  await page.goto('/'); 
  // 2. Use a custom text variable from your .env file
  console.log(`Hello, ${process.env.USER_NAME}!`); 
  
  // 3. Confirm the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});