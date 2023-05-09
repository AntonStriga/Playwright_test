import axios from "axios"
import { Book } from "./book.js"
import { url } from "../testData/apiData.js"
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
    

    constructor(username: string, password: string) {        
        this._username = username
        this._password = password
        this._userId = ''
        this.books = []
        this.api = new AppApi(username, password)
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
    set userId(id: string) {
        this._userId = id
    }
    async createUser() {
        const newUser = await this.api.user.post<UserAccount>({
            data:{
              "userName": this._username,
              "password": this._password
            }
        })        
        this._userId = newUser.userID
    }
    async getUserById() {
        return await this.api.user.get<UserAccount>({
            url: this._userId
        })
    }
    async deleteUser() {
        return this.api.user.delete({
            url: this._userId
        })
    }
    async isUserAutorized() {
        return this.api.autorized.post<boolean>({
            data: {
                "userName": this._username, 
                "password": this._password
            }
        })
    }
}