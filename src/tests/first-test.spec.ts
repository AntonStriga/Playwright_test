import { test, expect } from "../fixtures/pageFixtures.js";
import { invalidCreds, loginPageUiElements, userCreds } from "../testData/loginPageData.js";

test.describe('first suite', () => {
    test('first test', async ({
        page
    }) => {
        await page.goto("https://demoqa.com/")

        await expect(page).toHaveTitle('DEMOQA')
    })
    test('Valid login', async ({
        mainPage,
        leftPanel,
        loginPage,
        profilePage
    }) => {
        await mainPage.openBookStore()
        await leftPanel.openLoginPage()
        await loginPage.login(userCreds.login, userCreds.password)
        await expect(profilePage.mainHeader, 'Expect: Check Profile text is shown').toHaveText('Profile')
    })
    test('Invalid login', async ({
        mainPage,
        leftPanel,
        loginPage,
    }) => {
        await mainPage.openBookStore()
        await leftPanel.openLoginPage()
        for(const {login, password} of invalidCreds) {
            await loginPage.login(login, password)
            await expect(loginPage.errorMessage, '').toHaveText(loginPageUiElements.loginError)            
        }        
    })
    test('Login fields mandatory', async ({
        mainPage,
        leftPanel,
        loginPage,
    }) => {
        await mainPage.openBookStore()
        await leftPanel.openLoginPage()
        await loginPage.login("", "")
        expect(await loginPage.userNameInput.getAttribute('class'), '').toContain('is-invalid')
        expect(await loginPage.passwordInput.getAttribute('class'), '').toContain('is-invalid')
    })
})