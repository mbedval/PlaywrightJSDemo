const { test, expect } = require('@playwright/test');


test.describe("Annotation Sample Suite", {
    annotation: { type: 'category', description: 'info of annotation added at suite level' }, 
   }, () => {
    
    
    test('Annotated at test level', {
      annotation: {  type: 'annotation add to level', description: 'info of annotation added at suite level', },
    }, async ({ page }) => {
      // ...
      await page.goto('https://playwright.dev/');
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    });
  
    
    test('Annotation added dynamics during run time', async ({ page, browser }) => {
      test.info().annotations.push({
        type: 'browser version',
        description: browser.version(),
      });

    }); 

    test('Annotation added dynamically to show runtime info', async ({ page, browser }) => {
      test.info().annotations.push({
        type: 'browser version',
        description: browser.version(),
      }); 
  
      // ...
    });
  
  


  
})