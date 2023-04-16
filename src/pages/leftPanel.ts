import { Locator, Page } from "@playwright/test"

const enum BOOK_STORE {
    LoginPage = 0,
    BookStore = 1,
    Profile = 2,
    BookStoreApi = 3
}

export class LeftPanel {
    private locator: Locator    
    readonly accordion: Locator
    readonly bookStoreApp: ElementGroup
    constructor(page: Page) {
        this.locator = page.locator('.left-pannel')
        this.accordion = this.locator.locator('.accordion')
        this.bookStoreApp = new ElementGroup(this.accordion.locator('.element-group:nth-child(6)'))
    }
 
    async expandBookStore() {
        await this.bookStoreApp.expandGroup()
    }
    async openLoginPage() {
        await this.bookStoreApp.elementList.openItemById(BOOK_STORE.LoginPage)
    }
}

class ElementGroup {
    private locator: Locator
    readonly groupHeader: Locator
    readonly expandButton: Locator
    readonly elementList: ElementList
    constructor(locator: Locator) {
        this.locator = locator
        this.groupHeader = this.locator.locator('.group-header')
        this.expandButton = this.groupHeader.locator('.icon')
        this.elementList = new ElementList(this.locator)
    }

    async expandGroup() {
        this.expandButton.click()
    }
}

class ElementList {
    private locator: Locator
    readonly elementItem: Locator

    constructor(locator: Locator) {
        this.locator = locator.locator('.element-list')
        this.elementItem = this.locator.locator('.btn')
    }

    async openItemById(num: number) {
        await this.locator.locator(`[id="item-${num}"]`).click()
    }
}