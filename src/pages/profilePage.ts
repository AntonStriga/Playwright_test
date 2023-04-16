import { Locator, Page } from "@playwright/test";

export class ProfilePage {
    private locator: Locator
    readonly mainHeader: Locator

    constructor(page: Page) {
        this.locator = page.locator('.profile-wrapper')
        this.mainHeader = page.locator('.main-header')
    }
}