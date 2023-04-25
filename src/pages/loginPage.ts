import { Page } from "@playwright/test"
import { step } from "../helpers/helpers.js"

export class LoginPage {
    private locator
    readonly userNameInput
    readonly passwordInput
    readonly loginButton
    readonly newUserButton
    readonly mainHeader
    readonly header
    readonly additionalHeader
    readonly userNameLable
    readonly passwordLable
    readonly errorArea
    readonly errorMessage
    constructor(page: Page) {
        this.locator = page.locator('.login-wrapper')
        this.mainHeader = page.locator('.main-header')
        this.userNameInput = this.locator.locator('[id="userName"]')
        this.passwordInput = this.locator.locator('[id="password"]')
        this.loginButton = this.locator.locator('[id="login"]')
        this.newUserButton = this.locator.locator('[id="newUser"]')
        this.header = this.locator.locator('h2')
        this.additionalHeader = this.locator.locator('h5')
        this.userNameLable = this.locator.locator('[id="userName-label"]')
        this.passwordLable = this.locator.locator('[id="password-label"]')
        this.errorArea = this.locator.locator('[id="output"]')
        this.errorMessage = this.errorArea.locator('[id="name"]')
    }

    @step()
    async login(userName: string, password: string) {
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}