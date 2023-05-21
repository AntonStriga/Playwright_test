export const loginPageUiElements = {
    mainHeader: 'Login',
    header: 'Welcome,',
    additionalHeader: 'Login in Book Store',
    userNameLable: 'UserName :',
    passwordLable: 'Password :',
    loginButtonName: 'Login',
    newUserButtonName: 'New User',
    userNamePlaceholder: 'UserName',
    passwordPlaceholder: 'Password',
    loginError: 'Invalid username or password!'
}

export const userCreds = {
    login: 'test_qa',
    password: 'P@ssw0rd'
}

export const mainUserCreds = {
    login: 'test_qa_main',
    password: 'P@ssw0rd'
}

export const invalidCreds = [
    {login: 'test_qa', password: 'invalid'},
    {login: 'test', password: 'P@ssw0rdtest'},
    {login: 'test', password: 'm'},
    {login: ' ', password: 'P@ssw0rdtest'},
    {login: 'test_qa', password: ' '},
    {login: ' ', password: ' '},
]