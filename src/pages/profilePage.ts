import { Page } from "@playwright/test";

export class ProfilePage {
    private locator
    readonly mainHeader

    constructor(page: Page) {
        this.locator = page.locator('.profile-wrapper')
        this.mainHeader = page.locator('.main-header')
    }
}