import { test as base } from '@playwright/test';
import { LeftPanel } from '../pages/leftPanel.js';
import { LoginPage } from '../pages/loginPage.js';
import { MainPage } from '../pages/mainPage.js';
import { ProfilePage } from '../pages/profilePage.js';

type MyFixtures = {
    mainPage: MainPage
    loginPage: LoginPage
    profilePage: ProfilePage
    leftPanel: LeftPanel
}

export const test = base.extend<MyFixtures>({
    mainPage: async ({page}, use) => {
        const mainPage = new MainPage(page)
        await mainPage.goto()
        await use(mainPage)        
    },    
    loginPage: async ({page}, use) => {        
        await use(new LoginPage(page))        
    },
    profilePage: async ({page}, use) => {
        await use(new ProfilePage(page))
    },
    leftPanel: async ({page}, use) => {
        await use(new LeftPanel(page))
    },
})

export { expect } from '@playwright/test'