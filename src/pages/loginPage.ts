import { Locator, Page } from "@playwright/test"

export class LoginPage {
    private locator: Locator
    readonly userNameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    constructor(page: Page) {
        this.locator = page.locator('.login-wrapper')
        this.userNameInput = this.locator.locator('[id="userName"]')
        this.passwordInput = this.locator.locator('[id="password"]')
        this.loginButton = this.locator.locator('[id="login"]')
    }

    async login(userName: string, password: string) {
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}