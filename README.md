# Playwright_test

Framework:
1. Test Logic layer:

    	@playwright/test

2. Test Implementation layer:

    	Language: TypeScript
    
    	Design patterns: Page Object, Builder, Decorator
    
    	Locators: @playwright/test - page.locator()
    
    	Assertions: @playwright/test - expect(locator)

3. Test Data layer

		testData folder

4. Test Runner

    	npx playwright test

5. Test Reporter

		in-build: html-reporter 
			- npx playwright show-report
			- screenshot
			- video file
			- trace

		allure-reporter:
			npm i -D @playwright/test allure-playwright
			npm run allure-generate
			npm run allure-open

6. Test Logger

7. Services

8. Test Configuration

    	playwright.config.ts 

9. Dependency manager: 

		npm

10. Version control: 

    	GitHub

11. Build tool: 
