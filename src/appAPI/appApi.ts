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
}