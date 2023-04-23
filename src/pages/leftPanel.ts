import { Locator, Page } from "@playwright/test"
import { step } from "../helpers/helpers.js"

const enum BOOK_STORE {
    LoginPage = 0,
    BookStore = 1,
    Profile = 2,
    BookStoreApi = 3
}

export class LeftPanel {
    private locator    
    readonly accordion
    readonly bookStoreApp: ElementGroup
    constructor(page: Page) {
        this.locator = page.locator('.left-pannel')
        this.accordion = this.locator.locator('.accordion')
        this.bookStoreApp = new ElementGroup(this.accordion.locator('.element-group:nth-child(6)'))
    } 

    @step()
    async expandBookStore() {
        await this.bookStoreApp.expandGroup()
    }
    @step()
    async openLoginPage() {
        await this.bookStoreApp.elementList.openItemById(BOOK_STORE.LoginPage)
    }
}

class ElementGroup {
    private locator
    readonly groupHeader
    readonly expandButton
    readonly elementList: ElementList
    constructor(locator: Locator) {
        this.locator = locator
        this.groupHeader = this.locator.locator('.group-header')
        this.expandButton = this.groupHeader.locator('.icon')
        this.elementList = new ElementList(this.locator)
    }

    @step()
    async expandGroup() {
        this.expandButton.click()
    }
}

class ElementList {
    private locator
    readonly elementItem

    constructor(locator: Locator) {
        this.locator = locator.locator('.element-list')
        this.elementItem = this.locator.locator('.btn')
    }

    @step()
    async openItemById(num: number) {
        await this.locator.locator(`[id="item-${num}"]`).click()
    }
}