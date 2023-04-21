import { Page } from "@playwright/test"

export class MainPage {
    private page
    private locator    
    readonly cardsArea
    readonly bookStoreApp
    constructor(page: Page) {
        this.page = page
        this.locator = page.locator('[id="app"]')
        this.cardsArea = this.locator.locator('.category-cards')
        this.bookStoreApp = this.cardsArea.locator(".card:nth-child(6)")
    }

    async goto() {
        await this.page.goto("https://demoqa.com/")
    }
    async openBookStore() {
        await this.bookStoreApp.click()
    }
}