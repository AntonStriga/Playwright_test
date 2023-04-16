import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProfilePage } from "../pages/profilePage";

test.describe('first suite', () => {
    test('first test', async ({page}) => {
        await page.goto("https://demoqa.com/")

        await expect(page).toHaveTitle('DEMOQA')
    })
    test('Valid login', async ({page}) => {
        await page.goto("./login")
        const loginPage = new LoginPage(page)
        await loginPage.login('test_qa', 'P@ssw0rd')

        const profilePage = new ProfilePage(page)
        await expect(profilePage.mainHeader, 'Check Profile text is shown').toHaveText('Profile')
    })
})