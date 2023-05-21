import { CommonApi } from "../appAPI/appApi.js";
import { User } from "../appAPI/user.js";
import { test, expect } from "../fixtures/pageFixtures.js";
import { getRandomInt } from "../helpers/helpers.js";

test.describe('Tests with api', () => {
    test('Try user api', async ({}) => {
        const user = new User("test_qa1", "P@ssw0rd1")
        await user.createUser()      
        expect(await user.getUserById(), 'Expect: user created').toStrictEqual({
            "userId": user.userId,
            "username": user.userName,
            "books": user.books}
        )
        expect(await CommonApi.isUserAutorized(user.userName, user.userPassword), 'Expect: user is autorized').toBeTruthy()
        await user.deleteUser()     
    })
    test('Try book api', async({mainUser}) => {
        const allBooks = (await CommonApi.getBooks()).books
        expect(allBooks.length, 'Expect: check all books count').toBe(8)
        const firstBook = allBooks[getRandomInt(0, allBooks.length - 1)]
        const secondBook = allBooks[getRandomInt(0, allBooks.length - 1)]
        
        await mainUser.addBooks([firstBook.isbn])
        const res = (await mainUser.getUserById()).books
        expect(res, '').toStrictEqual([firstBook])
        
    })
})
