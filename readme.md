#### Reference Document

https://cucumber.io/docs/guides/10-minute-tutorial/?lang=javascript


#### install Playwright npm package
``` 
npm init playwright@latest


```
> Deafult configuration in "playwright.config.js" will have configuration for varius browser/platform as per your need or requirement feel free to comment or uncomment.


```
npx playwright test
npx playwright show-report
```
show-report will open presentable report for executed run.


#### Running API test using pactum
in this sample code i have used pactum javascript library to test api.
https://pactumjs.github.io/introduction/quick-start.html

```
# install pactum
npm install -D pactum

# install a test runner
npm install -D mocha

npx pactum-init
```

#### sample api code is added to apitests folder 
```
npm run test
```
> this command will run pactum test using mocha. as we have specified test path in package.json. 