// @ts-check
const { test, expect } = require('@playwright/test');


// test.afterEach(async ({ page }, testInfo) => {
//     if (testInfo.status !== testInfo.expectedStatus) {
//       const screenshotPath = `screenshots/${testInfo.title.replace(/ /g, '_')}.png`;
//       await page.screenshot({ path: screenshotPath });
//       console.log(`Screenshot saved: ${screenshotPath}`);
//     }
//   });

// Array of link labels to test
[
    { linklabel: 'Trace viewer', BreadcrumbsText : 'Getting Started'},
    { linklabel: 'Writing tests', BreadcrumbsText : 'Getting Started' },
    { linklabel: 'Installation', BreadcrumbsText :'Getting Started' },
     { linklabel: 'Generating tests' , BreadcrumbsText : 'Getting Started'},
].forEach(({ linklabel, BreadcrumbsText }) => {
    // Define a test for each link label
    test(`Verify the link  ' ${linklabel} '`, async ({ page }) => {
        // Navigate to the Playwright documentation site
        await page.goto('https://playwright.dev/');
        console.log('Navigated to Playwright homepage');

        // Click on the 'Get started' link to go to the main page
        await page.getByRole('link', { name: 'Get started' }).click();
        console.log('Clicked on Get started link');
        const nth = 0;
        const links = await page.getByRole('link', { name: linklabel }); 
        const nthLink = links.nth(nth);

        await nthLink.click();

       const breadcrumb  = await page.getByLabel('Breadcrumbs');
        const breadcrumbText = await breadcrumb.innerText();
        console.log(`Breadcrumb text: [ " ${breadcrumbText}"   ]`);

        await expect(breadcrumbText.trim()).toContain(BreadcrumbsText);
       //await page.screenshot({ path: `screenshot-${linklabel.replace(/ /g, '_')}.png` });



    });


    // getByRole('link', { name: 'Writing tests', exact: true })
});


