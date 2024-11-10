  
### Installation
```
initializing playwright package
npm init playwright@latest


# install pactum
npm install -D pactum
 

# install a test runner
npm install -D mocha

# initialize pactum project this will do needful change in package.json
npx pactum-init

```
>This will  create project for 

### Understanding project file
#### 'package.json' 
Below code snippet show it is showing playwright for browser automation, mocha for running test written in `pactum` for API testing. This are additional custom package added to this
```
{

  "name": "cucumberjs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "mocha .\\apitests\\apitest.js"
  },

  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@playwright/test": "^1.48.2",
    "@types/node": "^22.9.0",
    "mocha": "^10.8.2",
    "pactum": "^3.7.3"
  }

}
```


#### playwright.config.js

> Default configuration in "playwright.config.js"  is default configuration file. It contain settings required for executing test script like "Browser". 

```
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });
/**

 * @see https://playwright.dev/docs/test-configuration
 */
 
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See      https://playwright.dev/docs/api/class-testoptions. */
	
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  }, 

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // uncomment firefox and webkit if you wish to run for all browser
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
	/* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

  ],

  

  /* Run your local dev server before starting the tests */

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
```



### Running Tests
#### Run Playwright test 
While setting up few sample tests are added `example.spec.js` and `demo-todo-app.spec.js` . to run the test you can change `testDir: './tests',` in project file and  run test
```
npx playwright test
npx playwright show-report  // In default configuration this command is triggered automatically showing the result of the execution
```

#### Run `pactum` test 
`pactum` is framework used for the API testing using JavaScript. We have install package in sample project.  
```
npm run test
```

> this command will run `pactum` tests using mocha framework. as we have specified test path in `package.json`.. in the document package file show that tests are in apitest folder

Reference : https://pactumjs.github.io/introduction/quick-start.html  