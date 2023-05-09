import { Book } from "../appAPI/book.js";
import { User } from "../appAPI/user.js";
import { test, expect } from "../fixtures/pageFixtures.js";
import { loginPageUiElements } from "../testData/loginPageData.js";

test.describe('Tests with api', () => {
    test('Try user api', async ({

    }) => {
        const user = new User("test_qa1", "P@ssw0rd1")
        await user.createUser()      
        expect(await user.getUserById(), '').toStrictEqual({
            "userId": user.userId,
            "username": user.userName,
            "books": user.books}
        )
        expect(await user.isUserAutorized(), '').toBeTruthy()
        await user.deleteUser()     
    })
    test('Try book api', async() => {
        const user = new User("test_qa1", "P@ssw0rd1")
        await user.createUser()

        
    })
})
