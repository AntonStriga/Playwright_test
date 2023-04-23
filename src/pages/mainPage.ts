import { Page } from "@playwright/test"
import { step } from "../helpers/helpers.js"

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

    @step()
    async goto() {
        await this.page.goto("https://demoqa.com/")
    }
    @step()
    async openBookStore() {
        await this.bookStoreApp.click()
    }
}