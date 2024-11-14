// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true });
  test.context = context; // Store context to use in tests
  console.log('Tracing started');
});

test.afterAll(async () => {
  // Stop tracing and export the trace file after all tests
  await test.context.tracing.stop({ path: 'trace.zip' });
  console.log('Tracing stopped and trace file saved');
});

test.only('website should have a title @unit', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.describe("Test suite" , { tag: '@suite01'},() => {
  
  test('Should allow to navigate to Installation page @smoke', async ({ page, browserName }) => {
   
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await page.screenshot({ path: `.\\screenshots\\Intallationpage.png` });
  });

  test('Evaluate in browser context', async ({ page }) => {
    await page.goto('https://www.example.com/');
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
      }
    });
    console.log(dimensions);
  });

  test('test to skip conditionally based on context @unit' , async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', "Still working on it");
  });

});

test.describe("Test Suite for websocket", {
  annotation: { type: 'category', description: 'report' }, 
 }, () => {
  

  test('Intercept network requests tag: @unit',async ({ page }) => {
    
    // Log and continue all network requests
    await page.route('**', route => {
      console.log(route.request().url());
      route.continue();
    });
    await page.goto('http://todomvc.com');
  });


  test('Annotated test', {
    annotation: {
      type: 'websocket sample',
      description: 'https://playwright.dev/docs/api/class-websocketroute',
    },
  }, async ({ page }) => {
    // ...
  });

  
  test('Test with dynamic annotations', async ({ page, browser }) => {
    test.info().annotations.push({
      type: 'browser version',
      description: browser.version(),
    });

    // ...
  });


  test('test explicit trace enable', async ( {page, context}) => {
    await page.goto('http://todomvc.com');
    await page.goto('https://playwright.dev');
    
  })


  })


