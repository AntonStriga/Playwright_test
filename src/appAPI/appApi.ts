import { Book } from "./book.js"
import { requestBuilder } from "./requestBuilder.js"

export class AppApi {
    private appRequest

    constructor() {
        this.appRequest = requestBuilder()
    }

    get books() {
        return this.appRequest('BookStore/v1/Books')
    }
    get book() {
        return this.appRequest('BookStore/v1/Book')
    }
    get user() {
        return this.appRequest('Account/v1/User')
    }
    get autorized() {
        return this.appRequest('Account/v1/Authorized')
    }
    get login() {
        return this.appRequest('Account/v1/Login')
    }
    get token() {
        return this.appRequest('Account/v1/GenerateToken')
    }
}

export abstract class CommonApi {
    static readonly api = new AppApi()
        
    static async isUserAutorized(userName: string, userPass: string) {
        return this.api.autorized.post<boolean>({
            data: {
                "userName": userName, 
                "password": userPass
            }
        })
    }
    static async getBooks() {
        return this.api.books.get<{"books": Book[]}>()
    }
    static async getBook(isbn: string) {
        return this.api.book.get<Book>({
            url: isbn
        })
    }
}