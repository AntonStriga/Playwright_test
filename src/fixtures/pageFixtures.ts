import { test as base } from '@playwright/test';
import { LeftPanel } from '../pages/leftPanel.js';
import { LoginPage } from '../pages/loginPage.js';
import { MainPage } from '../pages/mainPage.js';
import { ProfilePage } from '../pages/profilePage.js';
import { User } from '../appAPI/user.js';
import { userCreds } from '../testData/loginPageData.js';

type MyFixtures = {
    mainPage: MainPage
    loginPage: LoginPage
    profilePage: ProfilePage
    leftPanel: LeftPanel    
}

type MyObjects = {
    mainUser: User
}

export const test = base.extend<MyFixtures & MyObjects>({
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
    mainUser: async ({}, use) => {
        const mainUser = new User(userCreds.login, userCreds.password)
        mainUser.createUser()
        await use(mainUser)
    }
})

export { expect } from '@playwright/test'