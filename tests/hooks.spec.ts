/*
before each: run before each test case 
after each: run after each test case
befre all: run once before all the test cases 
after all: run once after all the test cases 
before all: visiting
    before each: title  tc1: click   after each: message
after all: closing 
* */

import { test } from '@playwright/test';

let page: any;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://playwright.dev/');
});

test.afterAll(async () => {
  await page.close();
});

test.beforeEach(async () => {
  const title = await page.title();
  console.log('Title before each test case:', title);
});         

test.afterEach(async () => {
  console.log('Test case completed.');
});
 
test('Test Case 1: Click Get started Link', async () => {
    await page.getByRole('link', { name: 'Get started' }).click();

})