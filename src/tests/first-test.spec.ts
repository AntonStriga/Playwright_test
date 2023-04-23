import { test, expect } from "../fixtures/pageFixtures.js";

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
        await loginPage.login('test_qa', 'P@ssw0rd')
        await expect(profilePage.mainHeader, 'Check Profile text is shown').toHaveText('Profile')
    })
})