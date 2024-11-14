const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page, isMobile }) => {
  test.fixme( isMobile == false, 'Settings page does not work in mobile yet');

  await page.goto('http://localhost:3000/settings');
});

test('user profile', async ({ page }) => {
  await page.getByText('My Profile').click();
  // ...
});

// test.describe('chromium only @hooks', () => {
//     test.skip(({ browserName }) => browserName !== 'Chromium', 'Chromium only!');
  
//     test.beforeAll(async () => {
//       // This hook is only run in Chromium.
//     });
  
//     test('test 1', async ({ page }) => {
//       // This test is only run in Chromium.
//     });
  
//     test('test 2', async ({ page }) => {
//       // This test is only run in Chromium.
//     });
//   });

//   test('Dummy Test in hook suit @unit @hooks', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);
//   });