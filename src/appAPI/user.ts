import { Book } from "./book.js"
import { AppApi } from "./appApi.js"

interface UserAccount {
    username: string
    userID: string
    books: Book[]
}

export class User {
    private _userId: string
    private _username: string
    private _password: string
    readonly books: Book[]
    readonly api: AppApi
    private _token: string

    constructor(username: string, password: string) {        
        this._username = username
        this._password = password
        this._userId = ''
        this.books = []
        this.api = new AppApi()
        this._token = ""
    }

    get userId() {
        return this._userId
    }
    get userName() {
        return this._username
    }
    get userPassword() {
        return this._password
    }
    get token() {
        return this._token
    }
    set userId(id: string) {
        this._userId = id
    }
    set token(token: string) {
        this._token = token
    }
    async create() {
        const newUser = await this.api.user.post<UserAccount>({
            data: {
              "userName": this.userName,
              "password": this.userPassword
            }
        })        
        this._userId = newUser.userID
        this._token = (await this.api.token.post<{token: string}>({
            data: {
                "userName": this.userName, 
                "password": this.userPassword
            }
        })).token
        return newUser
    }
    async getUser() {
        return this.api.user.get<UserAccount>({
            url: this.userId
        }, this.token)
    }
    async deleteUser() {
        return this.api.user.delete({
            url: this.userId
        }, this.token)
    }
    async addBooks(bookIds: string[]) {
        const res = bookIds.map(el => {return {isbn: el}})
        await this.api.books.post({
            data: {
                "userId": this.userId,
                "collectionOfIsbns": res
            }
        }, this.token) 
    }
    async deleteBook(isbn: string) {
        await this.api.book.delete({
            data: {
                "isbn": isbn,
                "userId": this.userId,
            }
        }, this.token)
    }
    async deleteBooks() {
        await this.api.books.delete({
            url: this.userId,
        }, this.token) 
    }

    async login() {
        await this.api.login.post({
            data: {
                "userName": this.userName, 
                "password": this.userPassword
            }
        })
    }  
}