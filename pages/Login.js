exports.Login =  class Login {
    constructor(page) {
        this.page = page;
        this.email = this.page.locator('[data-test="email"]');
        this.password = this.page.locator('[data-test="password"]');
        this.submitBtn = this.page.locator('[data-test="login-submit"]');
    }

    async login(email, password) {
        await this.page.goto('https://practicesoftwaretesting.com/#/');
        await this.page.locator('[data-test="nav-sign-in"]').click();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submitBtn.click();
    }
}
