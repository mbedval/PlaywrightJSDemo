import { test, devices } from '@playwright/test';

// device id is from my android phone chagne by getting device name connected to your sysem.
    test.use({
      ...devices['RZ8NA0JFXST'],
      locale: 'en-US',
      geolocation: { longitude: 12.492507, latitude: 41.889938 },
      permissions: ['geolocation'],
    })


    test.beforeEach(async ({ page, isMobile }) => {
      // test.fixme( isMobile == false, 'Settings page does not work in mobile yet');
    
      await page.goto('http://localhost:3000/settings');
    });

    test.skip('Mobile and geolocation', async ({ page }) => {
      await page.goto('https://maps.google.com');
      await page.getByText('Your location').click();
      await page.waitForRequest(/.*preview\/pwa/);
      await page.screenshot({ path: 'colosseum-iphone.png' });


   

});