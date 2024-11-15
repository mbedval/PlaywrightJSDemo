import { test, devices } from '@playwright/test';


test.skip("This test are here but may not run any time", () => {


});


test.fixme("This test is backlog, may be fixed in future", () => {
    

});

test.slow("test is marked slow",
    
    {
        annotation :
            {
                type: "slow marked test case",
                description: "this test is expected to take long time as timeout is trippled"
            }
    }
    ,    
    () => {
    
});


test.fail('expected to fail case', 
    
    {
        annotation :
            {
                type: "negative scenario",
                description: "this test is designed with negative expectation"
            }
    }
    
    ,
    async ( {page, context}) => {
    await page.goto('http://todomvc.com');
    await expect(page).toHaveTitle(/Playwright/);
    
})