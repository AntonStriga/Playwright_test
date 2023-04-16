import { Locator, Page } from "@playwright/test"

export class BookStorePage {
    private locator: Locator    
    readonly cardsArea: Locator
    readonly bookStoreApp: Locator
    constructor(page: Page) {
        this.locator = page.locator('.books-wrapper')
    }
 

}