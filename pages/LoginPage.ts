import {Page} from 'playwright'

export class LoginPage {
    // SIEMPRE SE PONE
    private page: Page;
    
    //ELEMENTOS
    private usernameInput = '#username'
    private passwordInput = '#password'
    private loginButton = 'button[types="submit"]'

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLogin(): Promise<void> {
        await this.page.goto('https://example.com/login')
    }

    async enterUserName(username: string) : Promise<void> {
        await this.page.fill(this.usernameInput, username)
    }

    async enterPassword(password: string) : Promise<void> {
        await this.page.fill(this.passwordInput, password)
    }

    async clickLogin() : Promise<void> {
        await this.page.click(this.loginButton)
    }

    async login(username: string, password: string) : Promise<void> {
        await this.enterUserName(username)
        await this.enterPassword(password)
        await this.clickLogin()

    }
}