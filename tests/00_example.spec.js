// @ts-check
const { test, expect } = require('@playwright/test');




test('website should have a title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

