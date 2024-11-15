const { test, expect } = require('@playwright/test');


test.describe("Test suite 01",  () => {
    
    
    test('test case open application playwright' , async ({ page }) => { 
      // ...
      await page.goto('https://playwright.dev/');
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    });
  
    test('test case Open todomvc' , async ({ page }) => { 
        // ...
        await page.goto('https://playwright.dev/');
        // Expect a title "to contain" a substring.
        await page.goto('http://todomvc.com');
      });
    
    
})