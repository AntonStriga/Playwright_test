import { userCreds } from "../testData/loginPageData.js"
import { Book } from "./book.js"
import { requestBuilder } from "./requestBuilder.js"

export class AppApi {
    private appRequest

    constructor(login: string, password: string) {
        this.appRequest = requestBuilder(login, password)
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
}

export abstract class CommonApi {
    static readonly api = new AppApi(userCreds.login, userCreds.password)
        
    static async isUserAutorized(username: string, password: string) {
        return this.api.autorized.post<boolean>({
            data: {
                "userName": username, 
                "password": password
            }
        })
    }
    static async getBooks() {
        return this.api.books.get<{"books": Book[]}>()
    }    
}