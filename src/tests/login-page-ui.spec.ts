import { test, expect } from "../fixtures/pageFixtures.js";
import { loginPageUiElements } from "../testData/loginPageUiElements.js";

test.describe('Login page ui tests', () => {
    test('Checking headers texts', async ({
        mainPage,
        leftPanel,
        loginPage
    }) => {
        await mainPage.openBookStore()
        await leftPanel.openLoginPage()
        await expect(loginPage.mainHeader, 'Expect: Check main header has text').toHaveText(loginPageUiElements.mainHeader)
        await expect(loginPage.header, 'Expect: Check header has text').toHaveText(loginPageUiElements.header)
        await expect(loginPage.additionalHeader, 'Expect: Check additional header has text').toHaveText(loginPageUiElements.additionalHeader)
        await expect(loginPage.userNameLable, 'Expect: Check userName lable has text').toHaveText(loginPageUiElements.userNameLable)
        await expect(loginPage.passwordLable, 'Expect: Check password lable has text').toHaveText(loginPageUiElements.passwordLable)
    })
    test('Checking form elements texts', async ({
        mainPage,
        leftPanel,
        loginPage
    }) => {
        await mainPage.openBookStore()
        await leftPanel.openLoginPage()
        await expect(loginPage.userNameLable, 'Expect: Check userName lable has text').toHaveText(loginPageUiElements.userNameLable)
        await expect(loginPage.passwordLable, 'Expect: Check password lable has text').toHaveText(loginPageUiElements.passwordLable)
        expect(await loginPage.userNameInput.getAttribute('placeholder'), 'Expect: Check userName placeholder has text').toBe(loginPageUiElements.userNamePlaceholder)
        expect(await loginPage.passwordInput.getAttribute('placeholder'), 'Expect: Check password placeholder has text').toBe(loginPageUiElements.passwordPlaceholder)

        await expect(loginPage.loginButton, 'Expect: Check login button has text').toHaveText(loginPageUiElements.loginButtonName)
        await expect(loginPage.newUserButton, 'Expect: Check newUser button has text').toHaveText(loginPageUiElements.newUserButtonName)
    })
})