import { AppApi } from "./appApi.js"
import axios, {AxiosRequestConfig} from "axios";

export class Book {
    private _isbn: string
    private _title: string
    private _subTitle: string
    private _author: string 
    private _publish_date: string
    private _publisher: string
    private _pages: number = 0
    private _description: string
    private _website: string
    // static api: AppApi

    constructor(isbn: string, title: string, subTitle: string, author: string, publish_date: string, publisher: string, pages = 0, description: string, website: string) {
        this._isbn = isbn
        this._title = title
        this._subTitle = subTitle
        this._author = author
        this._publish_date = publish_date
        this._publisher = publisher
        this._pages = pages
        this._description = description
        this._website = website        
    }

    // api = new AppApi('Account/v1/GenerateToken', 'test_qa', 'P@ssw0rd')

    get isbn() {
        return this._isbn
    }
    get title() {
        return this._title
    }
    get subTitle() {
        return this._subTitle
    }
    get author() {
        return this._author
    }
    get publish_date() {
        return this._publish_date
    }
    get publisher() {
        return this._publisher
    }
    get pages() {
        return this._pages
    }
    get description() {
        return this._description
    }
    get website() {
        return this._website
    }
    
    // static async getBook() {
    //     return this.api.books.get()
    // }
    static async getBooks() {
        return (await axios.get('https://demoqa.com/BookStore/v1/Books')).data
    }
}